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
    let baseValue = 991;
    let savedValue = localStorage.getItem("liveUsers");
    let counter = savedValue ? parseInt(savedValue) : baseValue;

    // Форматирование
    function formatNumber(n) {
        return n.toLocaleString("en-US");
    }

    // Плавная анимация
    function animateNumber(from, to, duration = 600) {
        let start = performance.now();
        requestAnimationFrame(function step(ts) {
            let progress = Math.min((ts - start) / duration, 1);
            let value = Math.floor(from + (to - from) * progress);
            $("#counter").text(formatNumber(value));
            if (progress < 1) requestAnimationFrame(step);
        });
    }

    // Обновление и запись
    function updateCounter(delta) {
        // гарантируем, что никогда не уходим вниз
        if (delta < 0) delta = Math.abs(delta);

        let oldValue = counter;
        counter += delta;

        localStorage.setItem("liveUsers", counter);
        animateNumber(oldValue, counter);
    }

    // ===== Живое поведение (без спадов) =====

    // Частые мелкие приросты
    function smallGrowth() {
        updateCounter(Math.floor(Math.random() * 3) + 1); // +1–3
        setTimeout(smallGrowth, Math.random() * 2000 + 1500); // 1.5–3.5 сек
    }

    // Редкие большие всплески
    function bigGrowth() {
        updateCounter(Math.floor(Math.random() * 15) + 10); // +10–25
        setTimeout(bigGrowth, Math.random() * 45000 + 30000); // 30–75 сек
    }

    // Показ стартового значения
    $("#counter").text(formatNumber(counter));

    // Запуск
    setTimeout(smallGrowth, 2000);
    setTimeout(bigGrowth, 10000);

    // language selection code
    $('#language-select').on('change', function () {
        const url = $(this).val();
        window.location.href = url;
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const splide = new Splide('.splide', {
        type: 'slide',
        drag: 'free',
        arrows: false,
        pagination: true,
        autoWidth: true,
        focus: 'center',
        gap: '1.5rem',
        mediaQuery: 'min',
        breakpoints: {
            768: {
                destroy: true,
            },
        }
    });
    splide.mount();
});