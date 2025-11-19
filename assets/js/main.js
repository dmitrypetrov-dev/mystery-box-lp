$(document).ready(function () {
    //boxes code
    $(".welcome__box").on("click", function () {
        $(".modal").show(0);

        setTimeout(() => {
            $(".modal").addClass("active");

            // Запуск анимации конфетти с задержкой
            $(".confetti").each(function (i) {
                $(this).css("animation-delay", (i * 0.15) + "s");
            });
        }, 10);
    });
    //timer code
    let time = 20 * 60;
    setInterval(function () {
        if (time <= 0) return;
        time--;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        $(".welcome__counter").text(
            (minutes < 10 ? "0" : "") + minutes + ":" +
            (seconds < 10 ? "0" : "") + seconds
        );

    }, 1000);

});