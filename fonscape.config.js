const defaultHeroImage = "/fonscape/hero-white.svg";

const siteConfig = {
  language: "zh-CN",
  title: "猫茶|BLOG",
  description: "Peace&Love",
  siteUrl: "",
  postCategories: ["技术", "阅读", "生活", "创作", "观察", "学习","技能"],
  showPoems: true,
  showMusic: true,
  showCommunity: true,
  home: {
    eyebrow: "猫茶|BLOG",
    title: "我的博客",
    description: "Peace&Love",
  },
  author: {
    name: "博客作者",
    avatar: "",
    avatarAlt: "博客作者头像",
    tagline: "个人签名",
    introduction: "个人简介",
    interests: [],
    channels: {
      github: {
        label: "",
        url: "",
      },
      bilibili: {
        label: "",
        url: "",
      },
      x: {
        label: "",
        url: "",
      },
      email: {
        address: "",
      },
    },
  },
  about: {
    heroDescription: "关于页简介",
    eyebrow: "HELLO, THIS IS ME",
    greeting: "关于我",
    summary: "个人简介",
    paragraphs: [],
  },
  pages: {
    postsDescription: "文章页简介",
    poemsDescription: "小诗页简介",
    musicDescription: "音乐页简介",
    friendsDescription: "友链页简介",
  },
  footer: {
    owner: "博客作者",
  },
  heroes: {
    home: { image: defaultHeroImage, position: "center", mobilePosition: "center", size: "cover" },
    posts: { image: defaultHeroImage, position: "center", mobilePosition: "center", size: "cover" },
    poems: { image: defaultHeroImage, position: "center", mobilePosition: "center", size: "cover" },
    music: { image: defaultHeroImage, position: "center", mobilePosition: "center", size: "cover" },
    friends: { image: defaultHeroImage, position: "center", mobilePosition: "center", size: "cover" },
    about: { image: defaultHeroImage, position: "center", mobilePosition: "center", size: "cover" },
  },
};

export default siteConfig;
