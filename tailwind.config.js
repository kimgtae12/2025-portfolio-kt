/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {
      colors: {
        text: {
          primary: '#202020',
          secondary: '#f5f5f7',
        }
      },
      fontSize: {
        'title': '2.4rem',      // 24px - 메인 타이틀
        'subtitle': '2.0rem',   // 20px - 서브타이틀
        'header': '1.6rem',     // 18px - 헤더 텍스트
        'body': '1.6rem',       // 16px - 본문 텍스트
        'content': '1.4rem',    // 14px - 콘텐츠 텍스트
        'description': '1.2rem', // 12px - 설명 텍스트
        'caption': '1.0rem',    // 10px - 캡션/작은 텍스트
      }
    },
  },
  plugins: [],
}
