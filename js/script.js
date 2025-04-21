document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('.header');
    const home = document.querySelector(".home_container");
    const arrow_up = document.querySelector(".scroll_top");

    const header_height = header.offsetHeight;
    const home_height = home.offsetHeight;

    // 모든 intro-hover-area 박스 (logo + logo-text)
    const hoverAreas = document.querySelectorAll('.intro-hover-area');

    // 포트폴리오 영역
    const workLogos = document.querySelectorAll('#works .logos');
    const workTexts = document.querySelectorAll('#works .w_text');

    function onScroll() {
        // 헤더 색상 전환
        header.classList.toggle("header_dark", window.scrollY > header_height);

        // 홈 투명도
        home.style.opacity = 1 - window.scrollY / home_height;

        // 스크롤 탑 버튼
        arrow_up.style.opacity = window.scrollY > home_height / 2 ? 1 : 0;

        const viewportCenter = window.innerHeight / 3;

        // About & Skills 영역: logo + text
        hoverAreas.forEach(area => {
            const logo = area.querySelector('.logos');
            const text = area.querySelector('.logo-text');

            if (!logo || !text) return;

            const rect = logo.getBoundingClientRect();
            const logoCenter = rect.top + rect.height / 2;

            if (Math.abs(logoCenter - viewportCenter) < 100) {
                logo.classList.add('rotate');
                text.classList.add('view_span');
            } else {
                logo.classList.remove('rotate');
                text.classList.remove('view_span');
            }
        });

        // Portfolio 영역: logo + w_text
        workLogos.forEach((logo, i) => {
            const rect = logo.getBoundingClientRect();
            const logoCenter = rect.top + rect.height / 2;

            if (Math.abs(logoCenter - viewportCenter) < 150) {
                logo.classList.add('rotate');
                workTexts[i]?.classList.add('view_span');
            } else {
                logo.classList.remove('rotate');
                workTexts[i]?.classList.remove('view_span');
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
