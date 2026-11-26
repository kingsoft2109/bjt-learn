(function ($) {
    $(function () {
        /**
         * 最終受講日に今日の日付を設定する
         */
        function setLastestDate() {
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var date = date.getDate();
            if (month < 10) {
                month = "0" + month;
            }
            if (date < 10) {
                date = "0" + date;
            }
            var strDate = year + "/" + month + "/" + date;

            $(".last-date-area").show();
            $("#last_date").html(strDate);
        }

        function changeStatus() {

            $.ajax({
                dataType: "json",
                url: getProgressURL,
                data: {
                    format: "json",

                    cat: categoryNo,
                    unc: unitContentsNo,
                    asn: assignNo
                },
                success: function (response) {
                    isDoneLesson = response.done;
                    if (isDoneLesson) {
                        setLastestDate();
                    }
                    updateStatusView(response.status);
                    initLessonButtons();
                    redrawIndex();
                    if (response.max_score != "") {
                        $("#max_score").html(response.max_score);
                    }
                }
            });

        }

        /**
         * オーサリングのドリル／テスト画面　閉じようとした
         */
        function customizedTraining_reload() {
            alert("customizedTraining_reload");
        }

        /**
         * オーサリングのドリル／テスト画面　始まった
         */
        function customizedTrainingOnStart() {
            //TODO ここに学習に表示を変換する処理を入れる
            changeStatus();
        }

        /**
         * オーサリングのドリル／テスト画面　終わった
         */
        function customizedTrainingOnEnd() {
            //TODO ここに終わった時の処理を入れる
            changeStatus();
        }


        window.customizedTraining_reload = customizedTraining_reload;
        window.customizedTrainingOnStart = customizedTrainingOnStart;
        window.customizedTrainingOnEnd = customizedTrainingOnEnd;


        //学習ステータス icon
        var statusIcon = $(".lesson-icon i", $("#unitHeader"));

        /**
         * 学習中iconをリセットする
         */
        function resetStatusIcon() {
            statusIcon.removeClass("done");
            statusIcon.removeClass("undone");
            statusIcon.removeClass("learning");
        }

        /**
         * 学習状況の表示をアップデートする
         * @param status
         */
        function updateStatusView(status) {

            // TODO ここはマスタを見るように修正すること
            if (status == 9) {
                //完了した

                resetStatusIcon();
                statusIcon.addClass("done");
				if(unitDisplayControl=="1"){
					$(".unitNextButton").show();	//次へボタン表示
				}

            } else if (status == 1) {
                //学習中
                resetStatusIcon();
                statusIcon.addClass("learning");
				if(unitDisplayControl=="1"){
					$(".unitNextButton").hide();	//次へボタン非表示
				}
            } else {
                //ここにはこない。
                alert("受講状況の更新に失敗しました。");
            }
        }


        function initLessonButtons() {

            if (isBookmark) {
                $("#doBookmarkButton").hide();
                $("#undoBookmarkButton").show();
            } else {
                $("#doBookmarkButton").show();
                $("#undoBookmarkButton").hide();
            }


            if (isDoneLesson) {
                $(".done-icon-box").show();
                $("#doneCancelBox").show();
                $(".last-date-area").show();
                //〇〇以上で終了となりますの部分
                $(".done-condition").hide();
                $("#doneButton").hide();
                $("#suspendButton").hide();

            } else {

                $(".done-icon-box").hide();
                $("#doneCancelBox").hide();

                $(".done-condition").show();
                $("#doneButton").show();
                $("#suspendButton").show();

            }

        }

        /**
         * 目次を再描画する
         */
        function redrawIndex() {

            //キャッシュ対策用の乱数
            var ran = new Date().getTime();

            var url = "unit_lists" + location.search + "&simple=true&un=" + unitNo + "&ran=" + ran;

            $("#unit_list").load(url, null, function (response, status, xhr) {

                if (status == "error") {
                    // TODO ここにエラー処理を入れること
                    //alert("エラー" + url);
                    //alert(msg + xhr.status + " " + xhr.statusText);
                }

            });

        }

        /**
         * 完了する、中断するボタンなどが押されたとき
         */
        $(".unitButton").click(function () {
            $.ajax({
                type: "POST",
                url: $(this).data("url") + "&format=json", // References "/say/hello?format=json"
                dataType: "json",
                success: function (response) {
                    isDoneLesson = response.done;
                    if (isDoneLesson) {
                        setLastestDate();
                    }
                    updateStatusView(response.status);
                    initLessonButtons();
                    redrawIndex();
                }
            });
            return false;
        });

        /**
         * ブックマークボタンが押されたとき
         */
        $(".bookmarkButton").click(function () {
            $.ajax({
                type: "POST",
                url: $(this).attr("href") + "&format=json", // References "/say/hello?format=json"
                dataType: "json",
                success: function (response) {
                    isBookmark = response.isBookmark;
                    //　学習中にセットする
                    // TODO ここは、マスタを見るように変更すること
                    //updateStatusView(1);
                    initLessonButtons();
                    redrawIndex();
                }
            });
            return false;
        });


    /**
     * メモを保存する
     */
    $("#saveLessonMemoButton").click(function() {
        $.ajax({
            type: "POST",
            url: $(this).attr("href") + "?format=json", // References "/say/hello?format=json"
            dataType: "json",
            data:{
                content : $("#lessonMemoInput").val(),
                unitContentsNo : unitContentsNo,
                assignNo : assignNo
            },
            success: function(response) {
               $("#saveMemoMsg").text(response.msg);



                if( contents_type === 16 && !isDoneLesson) {

                    $.ajax({
                        type: "POST",
                        url: doDoneURL + "&format=json", // References "/say/hello?format=json"
                        dataType: "json",
                        success: function(response) {
                            isDoneLesson = response.done;
                            if(isDoneLesson) {
                                setLastestDate();
                            }
                            updateStatusView(response.status);
                            initLessonButtons();
                            redrawIndex();
                        }
                    });


                }


            }
        });
        return false; // keeps the normal request from firing
    });


        /**
         * メモを取得する
         */
        function getMemo() {
            $.ajax({
                type: "POST",
                url: getMemoURL + "?format=json", // References "/say/hello?format=json"
                dataType: "json",
                data: {
                    unc: unitContentsNo,
                    asn: assignNo
                },
                success: function (response) {
                    $("#lessonMemoInput").val(response.memo);
                    drawLessonMemoInputCount();
                }
            });
        }


        // キー入力が発生する度に実行
        $('#lessonMemoInput').on('keyup', function () {
            drawLessonMemoInputCount();
            $("#saveMemoMsg").text("");
        });
        /**
         * メモの文字数を表示する
         */
        function drawLessonMemoInputCount() {
            // テキストエリアのvalueから文字列の長さを取得して、
            var cnt = $('#lessonMemoInput').val().length;
            // 文字数を表示
            if (cnt > 1000) {
                $('#lessonMemoInputCount').text("1000文字以内で入力してください");
            } else {
                $('#lessonMemoInputCount').text("あと" + (1000 - cnt) + "文字入力できます。");
            }
        }


        $("a[data-toggle='collapse']").click(function (e) {
            e.preventDefault();
        });

        redrawIndex();
        initLessonButtons();

        if (getMemoURL !== '') {
            getMemo();
        }
    });

})(jQuery);
