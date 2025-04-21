document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('.header');
    const home = document.querySelector(".home_container");
    const arrow_up = document.querySelector(".scroll_top");
    const logos = document.querySelectorAll('.logos');
    const texts = document.querySelectorAll('.w_text');
    const introTexts = document.querySelectorAll('.logo-text');

    const header_height = header.offsetHeight;
    const home_height = home.offsetHeight;

    function onScroll() {
        // 헤더 색상
        header.classList.toggle("header_dark", window.scrollY > header_height);

        // 홈 페이드
        home.style.opacity = 1 - window.scrollY / home_height;

        // 스크롤 탑 버튼
        arrow_up.style.opacity = window.scrollY > home_height / 2 ? 1 : 0;

        // 로고와 텍스트 애니메이션
        const viewportCenter = window.innerHeight / 3;

        logos.forEach((logo, i) => {
            const rect = logo.getBoundingClientRect();
            const logoCenter = rect.top + rect.height / 2;

            if (Math.abs(logoCenter - viewportCenter) < 100) {
                logo.classList.add('rotate');
                texts[i]?.classList.add('view_span');
                introTexts[i]?.classList.add('view_span');
            } else {
                logo.classList.remove('rotate');
                texts[i]?.classList.remove('view_span');
                introTexts[i]?.classList.remove('view_span');
            }
        });
    }

    window.addEventListener("scroll", onScroll);
    window.addEventListener("load", onScroll);

    arrow_up.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
