/**
 * Created with IntelliJ IDEA.
 * User: takeo
 * Date: 2012/11/27
 * Time: 19:00
 * To change this template use File | Settings | File Templates.
 */

/*global $: false, require: false, define: false, Class: false */

$(function () {
    'use strict';

    if (forumViewCount >= forumAllCount) {
        $(".readMoreButton").hide();
    }

    $(".showContents").each(function (index, el) {
        var $contentDObj, content_disp;

        $contentDObj = $(el).parent().next();
        content_disp = $contentDObj.data("vcDispFlg");

        if (content_disp) {
            $contentDObj.show();
        } else {
            $contentDObj.hide();
        }
    });

    //タイトルがクリックされた場合、内容を表示
    $(".showContents").live("click", function (e) {
        e.preventDefault();

        var
            //
            $contentDObj,
            // コメント表示欄
            $commentLObj,
            content_disp;

        $contentDObj = $(this);

        $commentLObj = $(this).closest(".message-box").find(".commentList");


        content_disp = $contentDObj.data("vcDispFlg");

        if (content_disp == 'true') {
            $contentDObj.data("vcDispFlg", 'false');
            $contentDObj.html("コメントを見る")
            $commentLObj.hide();
        } else {


            $contentDObj.data("vcDispFlg", 'true');
            $contentDObj.html("コメントを隠す");

            //コメントを取得して表示
            $.ajax({
                type: "GET",
                url: $(this).attr("href") + "&format=json", // References "/say/hello?format=json"
                dataType: "json",
                cache: false,
                success: function (response) {
                    if (response.result) {
                        $commentLObj.html(response.commentList);
                        $commentLObj.show();
                        //ナイス
                        $(".niceButton").each(function (index, el) {

                            var nice_status = $(el).data("vcNiceStatus");

                            if (nice_status) {
                                $("span", el).html("nice取消");
                            } else {
                                $("span", el).html("nice");
                            }

                            $(el).parent().find(".niceCount").html($(el).data("vcNiceCnt"));

                            if ($(el).data("vcNiceCnt") == '0') {
                                $(el).next().children(".balloon").hide();
                            } else {
                                $(el).next().children(".balloon").show();

                            }
                        });

                        /*
                         * 　ランク設定
                         */
                        $(".ranklabel").each(function () {


                            var $starObj, rank, comment_no, forum_no, admin_flg;

                            $starObj = $(this);
                            rank = $starObj.data("vcRank");
                            comment_no = $starObj.data("vcCommentNo");
                            forum_no = $starObj.data("vcForumNo");
                            admin_flg = $starObj.data("vcAdmin");

                            $("input[name='radio" + comment_no + "']").val([rank]);

                            $('.auto-submit' + comment_no).rating({
                                callback: function (value, link) {
                                    if((value == 1) || (value == 2) || (value == 3)) {

                                    } else {
                                        value = 0;
                                    }

                                    //既読にする処理を後で追加
                                    $.ajax({
                                        type: "POST",
                                        url: "set_rank" + "?format=json", // References "/say/hello?format=json"
                                        dataType: "json",
                                        data: {
                                            comment_no : comment_no,
                                            forum_no : forum_no,
                                            rank : value
                                        },
                                        cache: false,
                                        success: function (response) {
                                            if (response.result) {
                                                $starObj.data("vcRank", response.rank);
                                            } else {
                                                alert("登録に失敗しました");
                                            }
                                        }
                                    });

                                }
                            });

                            if (admin_flg == false) {
                                $('.auto-submit' + comment_no).rating('readOnly', true);
                            }
                        });

                        $contentDObj.data("vcDispFlg",'true');
                        $contentDObj.show();

                    } else {
                        alert("登録に失敗しました");
                    }
                }
            });
        }
    });


    //ナイスボタン
    $(".niceButton").each(function (index, el) {

        var nice_status = $(el).data("vcNiceStatus");

        if (nice_status) {
            $("span", el).html("nice取消");
        } else {
            $("span", el).html("nice");
        }

        $(el).parent().find(".niceCount").html( $(el).data("vcNiceCnt") );


        if ($(el).data("vcNiceCnt") == '0') {
            $(el).next().children(".balloon").hide();
        } else {
            $(el).next().children(".balloon").show();
        }
    });

    //ナイスボタンがクリックされた場合
    $(".niceButton").live("click", function (e) {
        e.preventDefault();


        var $nice_btn, nice_status, comment_no, forum_no, url;

        $nice_btn = $(this);
        nice_status = $nice_btn.data("vcNiceStatus");
        comment_no = $nice_btn.data("vcCommentNo");
        forum_no = $nice_btn.data("vcForumNo");
        url = '';

        if (nice_status) {
            url = "del_nice" + "?format=json";
        } else {
            url = "set_nice" + "?format=json";
        }

        $.ajax({
            type: "POST",
            url: url, // References "/say/hello?format=json"
            dataType: "json",
            data: {
                comment_no : comment_no,
                forum_no : forum_no
            },
            cache: false,
            success: function (response) {

                if (response.result) {

                    if (response.status) {
                        $("span", $nice_btn).html("nice取消");
                    } else {
                        $("span", $nice_btn).html("nice");
                    }


                    $nice_btn.parent().find(".niceCount").html( response.nice_cnt );
                    if (response.nice_cnt == 0) {
                        $nice_btn.next().children(".balloon").hide();
                    } else {
                        $nice_btn.next().children(".balloon").show();

                    }

                    $nice_btn.removeData();

                    $nice_btn.data("vcNiceStatus", response.status);
                    $nice_btn.data("vcNiceCnt", response.nice_cnt);

                    //ナイスボタンがクリックされた場合、合計値を変更
                    $nice_btn.closest(".forumList").find(".total_nice_cnt").html(response.nice_total_cnt);

                } else {
                    alert("登録に失敗しました");
                }
            }
        });

    });

    /**
     * フォーラム作成が押されたとき
     */
    $("#forum_title").click(function() {
        $("#forum_input").show();
    });

    /**
     * フォーラムを保存する
     */
    $("#saveForumButton").live("click", function (e) {

        $.ajax({
            type: "POST",
            url: $(this).attr("href") + "?format=json", // References "/say/hello?format=json"
            dataType: "json",
            data: {
                title: $("#forum_title").val(),
                contents: $("#forum_contents").val(),
                unitContentsNo: unitContentsNo,
                assignGroupNo: assignGroupNo,
                cat: categoryNo,
                asn: assignNo
            },
            cache: false,
            success: function (response) {
            	if(response.msg ==  ""){
                	//console.log(response.msg);
                    $("#forum_title").val("");
                    $("#forum_contents").val("");
                    $("#forum_input").hide();
                    $("#new-forum").after(response.new_forum);
                    forumViewCount += 1;
                    forumAllCount += 1;

                    //内容を表示
                    $(".showContents").each(function (index, el) {

                        var $contentDObj, content_disp;

                        $contentDObj = $(el).parent().next();
                        content_disp = $contentDObj.data("vcDispFlg");

                        $contentDObj.data("vcDispFlg", 'false');
                        $contentDObj.hide();
                    });
            	}else{
            		alert(response.msg);
            	};

            }
        });
        return false; // keeps the normal request from firing
    });

    // キー入力が発生する度に実行
    $('#forum_contents').on('keyup', function () {
        drawForumInputCount();
    });

    /**
     * フォーラムの文字数を表示する
     */
    function drawForumInputCount() {
        // テキストエリアのvalueから文字列の長さを取得して、
        var cnt = $('#forum_contents').val().length;
        // 文字数を表示
        if (cnt > 2000) {
            $('#forumInputCount').text("2000文字以内で入力してください");
        } else {
            $('#forumInputCount').text("あと" + (2000 - cnt) + "文字入力できます。");
        }
    }

    /**
     * コメントを保存する
     */
    $(".saveCommentButton").live("click", function (e) {
        e.preventDefault();


        var
            $commentContainer,
            $allViewObj,
            allView,
            $comCntObj,
            $contener,
            forum_no,
            comment,
            // 保存ボタン
            $saveBuuton;

        $commentContainer = $(this).closest(".commentList");

        $saveBuuton = $(e.currentTarget);


        //showCommentオブジェクト
        $allViewObj = $(this).parent().parent().parent().parent().parent().next();
        allView =  $allViewObj.data('vcAllviewFlg');

        //commentCountオブジェクト
        $comCntObj = $(this).closest(".forumList").find(".commentCount");

        $contener = $(this).parent().parent().parent();
        forum_no = $contener.data("forum_no");
        comment = $("#comment" + forum_no).val();



        $.ajax({
            type: "POST",
            url: $(this).attr("href") + "?format=json&allView=" + allView, // References "/say/hello?format=json"
            dataType: "json",
            data: {
                comment: comment,
                forum_no : forum_no
            },
            cache: false,
            success: function (response) {

                $commentContainer.html(response.commentList);

                // コメント数を更新
                $comCntObj.text(response.commentCount);


                //ナイス
                $(".niceButton").each(function (index, el) {

                    var nice_status = $(el).data("vcNiceStatus");


                    if (nice_status) {
                        $("span", el).html("nice取消");
                    } else {
                        $("span", el).html("nice");
                    }

                    $(el).closest(".comment").find(".niceCount").html($(el).data("vcNiceCnt"));




                    if ($(el).data("vcNiceCnt") == 0) {
                        $(el).next().children(".balloon").hide();
                    } else {
                        $(el).next().children(".balloon").show();
                    }


                });

                /*
                 * 　ランク設定
                 */
                $(".ranklabel").each(function () {




                    var $starObj,
                        rank,
                        comment_no,
                        forum_no,
                        admin_flg;





                    $starObj = $(this);
                    rank = $starObj.data("vcRank");
                    comment_no = $starObj.data("vcCommentNo");
                    forum_no = $starObj.data("vcForumNo");
                    admin_flg = $starObj.data("vcAdmin");




                    $("input[name='radio" + comment_no + "']").val([rank]);

                    $('.auto-submit' + comment_no).rating({

                        callback: function (value, link) {
                            if ((value == 1) || (value == 2) || (value==3)) {
                            } else {
                                value = 0;
                            }

                            $.ajax({
                                type: "POST",
                                url: "set_rank" + "?format=json", // References "/say/hello?format=json"
                                dataType: "json",
                                data: {
                                    comment_no : comment_no,
                                    forum_no : forum_no,
                                    rank : value
                                },
                                cache: false,
                                success: function (response) {
                                    if(response.result){
                                        $starObj.data("vcRank",response.rank);
                                    } else {
                                        alert("登録に失敗しました");
                                    }
                                }
                            });

                        }
                    });

                    if (admin_flg == false) {
                        $('.auto-submit' + comment_no).rating('readOnly', true);
                    }
                });


                $("#comment" + forum_no).val("");
            }
        });
        return false; // keeps the normal request from firing
    });

    // キー入力が発生する度に実行
    $('.inputComment').live('keyup', function () {
        var idx = $('.inputComment').index(this);
        drawCommentInputCount(idx);
    });

    /**
     * コメントの文字数を表示する
     */
    function drawCommentInputCount(idx) {
        // テキストエリアのvalueから文字列の長さを取得して、
        var cnt = $('.inputComment').eq(idx).val().length;

        // 文字数を表示
        if (cnt > 2000) {
            $('.commentInputCount').eq(idx).text("2000文字以内で入力してください");
        } else {
            $('.commentInputCount').eq(idx).text((2000 - cnt) + "/2000");
        }
    }

    /*
     * 　コメント削除
     */
    $(".deleteCommentButton").live("click", function (e) {

        e.preventDefault();


        if (window.confirm("コメントを削除してよろしいですか？")) {
           // なにもしない
        } else {
            return false;
        }

        var
            $contener,
            $allViewObj,
            allView,
            $comCntObj,
            $niceCntObj;



        $contener = $(this).closest(".commentList");
        //showCommentオブジェクト
        $allViewObj = $(this).parent().parent().parent().parent();

        allView =  $allViewObj.data('vcAllviewFlg');

        //commentCountオブジェクト
        $comCntObj = $(this).closest(".forumList").find(".commentCount");

        //niceCountオブジェクト
        $niceCntObj = $(this).closest(".forumList").find(".total_nice_cnt");



        $.ajax({
            type: "POST",
            url: $(this).attr("href") + "?format=json&allView=" + allView, // References "/say/hello?format=json"
            dataType: "json",
            cache: false,
            success: function (response) {

                if (response.result) {

                    $contener.html(response.commentList);
                    $comCntObj.text(response.commentCount);
                    $niceCntObj.html(response.nice_total_cnt);

                    //ナイス
                    $(".niceButton").each(function (index, el) {

                        var nice_status = $(el).data("vcNiceStatus");

                        if (nice_status) {
                            $("span", el).html("nice取消");
                        } else {
                            $("span", el).html("nice");
                        }

                        $(el).parent().find(".niceCount").html( $(el).data("vcNiceCnt") );

                        if ($(el).data("vcNiceCnt") == 0) {
                            $(el).next().children(".balloon").hide();
                        } else {
                            $(el).next().children(".balloon").show();
                        }


                    });

                    /*
                     * 　ランク設定
                     */
                    $(".ranklabel").each(function () {

                        var $starObj, rank, comment_no, comment_no, forum_no, admin_flg;

                        $starObj = $(this);
                        rank = $starObj.data("vcRank");
                        comment_no = $starObj.data("vcCommentNo");
                        forum_no = $starObj.data("vcForumNo");
                        admin_flg = $starObj.data("vcAdmin");

                        $("input[name='radio" + comment_no + "']").val([rank]);

                        $('.auto-submit' + comment_no).rating({

                            callback: function(value, link) {
                                if ( (value == 1) || (value == 2) || (value==3)) {
                                } else {
                                    value = 0;
                                }
                                //console.log(value);
                                $.ajax({
                                    type: "POST",
                                    url: "set_rank" + "?format=json", // References "/say/hello?format=json"
                                    dataType: "json",
                                    data: {
                                        comment_no : comment_no,
                                        forum_no : forum_no,
                                        rank : value
                                    },
                                    cache: false,
                                    success: function (response) {
                                        if (response.result) {
                                            $starObj.data("vcRank", response.rank);
                                        } else {
                                            alert("登録に失敗しました");
                                        }
                                    }
                                });

                            }
                        });

                        if (admin_flg == false) {
                            $('.auto-submit' + comment_no).rating('readOnly', true);
                        }
                    });

                } else {
                    alert("削除に失敗しました");
                }
            }
        });
    });

    //もっと読むリンクを押されたとき
    $(".readMoreButton").click(function (e) {
        e.preventDefault();
        var $container = $(this);

        $.ajax({
            type: "POST",
            url: $(this).attr("href") + "?format=json&row_num=" + (forumViewCount + 1) + "&assign_group_no=" + assignGroupNo + "&unit_contents_no=" + unitContentsNo, // References "/say/hello?format=json"
            dataType: "json",
            cache: false,
            success: function (response) {
                if (response.result) {
                    $container.before(response.forum_more);
                    forumViewCount = forumViewCount + parseInt(response.forum_count);

                    //コメントの内容を非表示
                    $(".showContents").each(function (index, el) {
                        var $contentDObj, content_disp;
                        $contentDObj = $(el).parent().next();
                        content_disp = $contentDObj.data("vcDispFlg");

                        $contentDObj.data("vcDispFlg", 'false');
                        $contentDObj.hide();

                    });


                    //全件表示していたら、もっと見るリンクを非表示にする
                    if (forumViewCount >= forumAllCount) {
                        $(".readMoreButton").hide();
                    }
                }
            }
        });
    });

    /*
     * 　全てのコメントを見るリンクを押されたとき
     */
    $(".readCommentMoreButton").live("click", function (e) {
        e.preventDefault();

        var $commentContainer, $allViewObj, allView, $comCntObj;

        $commentContainer = $(this).closest(".commentList");

        //showCommentオブジェクト
        $allViewObj = $(this).parent().parent().parent();
        allView =  $allViewObj.data('vcAllviewFlg');

        $allViewObj.data('vcAllviewFlg','true');
        //commentCountオブジェクト
        $comCntObj = $allViewObj.next().children(".commentCount");



        $.ajax({
            type: "POST",
            url: $(this).attr("href") + "&format=json&allView=true", // References "/say/hello?format=json"
            dataType: "json",
            cache: false,
            success: function (response) {
                if (response.result) {
                    $commentContainer.html(response.commentList);
                    $comCntObj.text(response.commentCount);

                    //readCommentMoreButtonオブジェクト
                    $(this).hide();

                    //ナイス
                    $(".niceButton").each(function (index, el) {

                        var nice_status = $(el).data("vcNiceStatus");


                        if (nice_status) {
                            $("span", el).html("nice取消");
                        } else {
                            $("span", el).html("nice");
                        }

                        $(el).parent().find(".niceCount").html( $(el).data("vcNiceCnt") );

                        if ($(el).data("vcNiceCnt") == 0) {
                            $(el).next().children(".balloon").hide();
                        } else {
                            $(el).next().children(".balloon").show();
                        }

                    });

                    /*
                     * 　ランク設定
                     */
                    $(".ranklabel").each(function () {




                        var $starObj,
                            rank,
                            comment_no,
                            forum_no,
                            admin_flg;


                        $starObj = $(this);
                        rank = $starObj.data("vcRank");
                        comment_no = $starObj.data("vcCommentNo");
                        forum_no = $starObj.data("vcForumNo");
                        admin_flg = $starObj.data("vcAdmin");

                        $("input[name='radio" + comment_no + "']").val([rank]);

                        $('.auto-submit' + comment_no).rating({
                            callback: function (value, link) {
                                if ((value == 1) || (value == 2) || (value == 3)) {
                                } else {
                                  value = 0;
                                }

                                $.ajax({
                                    type: "POST",
                                    url: "set_rank" + "?format=json", // References "/say/hello?format=json"
                                    dataType: "json",
                                    data: {
                                        comment_no : comment_no,
                                        forum_no : forum_no,
                                        rank : value
                                    },
                                    cache: false,
                                    success: function (response) {
                                        if (response.result) {
                                            $starObj.data("vcRank", response.rank);
                                        } else {
                                            alert("登録に失敗しました");
                                        }
                                    }
                                });
                            }
                        });

                        if (admin_flg == false) {
                            $('.auto-submit' + comment_no).rating('readOnly', true);
                        }
                    });
                }
            }
        });
    });

});
