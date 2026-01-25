import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hero: {
        greeting: "Hi, I'm",
        name: "Jonas",
        title: "Full-Stack Developer",
        description: "A passionate software engineer with a strong foundation in full-stack development and machine learning. With hands-on experience in programming, problem-solving, and teamwork through practical projects, I bring a proactive willingness to learn new technologies and contribute effectively in professional IT environments.",
        getInTouch: "Get In Touch",
        downloadCV: "Download CV"
      },
      navigation: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        certificates: "Certificates",
        experience: "Experience",
        contact: "Contact"
      },
      toolbar: {
        translate: "Translate",
        vietnamese: "Tiếng Việt",
        english: "English"
      }
    }
  },
  vi: {
    translation: {
      hero: {
        greeting: "Xin chào, tôi là",
        name: "Jonas",
        title: "Nhà Phát Triển Full-Stack",
        description: "Một kỹ sư phần mềm đam mê với nền tảng vững chắc trong phát triển full-stack và học máy. Với kinh nghiệm thực tế trong lập trình, giải quyết vấn đề và làm việc nhóm thông qua các dự án thực tế, tôi mang đến sự chủ động sẵn sàng học hỏi các công nghệ mới và đóng góp hiệu quả trong môi trường CNTT chuyên nghiệp.",
        getInTouch: "Liên Hệ",
        downloadCV: "Tải CV"
      },
      navigation: {
        about: "Giới Thiệu",
        skills: "Kỹ Năng",
        projects: "Dự Án",
        certificates: "Chứng Chỉ",
        experience: "Kinh Nghiệm",
        contact: "Liên Hệ"
      },
      toolbar: {
        translate: "Dịch",
        vietnamese: "Tiếng Việt",
        english: "English"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;