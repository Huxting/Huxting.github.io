import React, { useState } from "react";
import {
  Mail,
  Github,
  MapPin,
  GraduationCap,
  Briefcase,
  MessageCircle,
  Hash,
  Check,
} from "lucide-react";

const Home = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12 pt-8">
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-brand-pink-light">
            <img
              src={`${import.meta.env.BASE_URL}myPhoto.png`}
              alt="Personal Photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-grow text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            你好，我是{" "}
            <span className="text-brand-pink-dark underline decoration-brand-pink/50">
              胡欣婷
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            一个对技术充满热情的计算机专业毕业生。我致力于构建优雅、易用且高性能的
            Web 应用。 在这里，我分享我的学习历程和对技术的见解。
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <div className="group relative">
              <button
                onClick={() => handleCopy("hxting2029", "wechat")}
                className="p-2 bg-white rounded-full text-brand-pink-dark hover:scale-110 transition-transform shadow-sm border border-brand-pink"
                title="点击复制微信号"
              >
                {copiedId === "wechat" ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <MessageCircle className="w-5 h-5" />
                )}
              </button>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                {copiedId === "wechat" ? "已复制！" : "WeChat: hxting2029"}
              </div>
            </div>

            <div className="group relative">
              <button
                onClick={() => handleCopy("986647306", "qq")}
                className="p-2 bg-white rounded-full text-brand-pink-dark hover:scale-110 transition-transform shadow-sm border border-brand-pink"
                title="点击复制QQ号"
              >
                {copiedId === "qq" ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Hash className="w-5 h-5" />
                )}
              </button>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                {copiedId === "qq" ? "已复制！" : "QQ: 986647306"}
              </div>
            </div>

            <a
              href="mailto:986647306@qq.com"
              className="p-2 bg-white rounded-full text-brand-pink-dark hover:scale-110 transition-transform shadow-sm border border-brand-pink"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Huxting"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-brand-pink-dark hover:scale-110 transition-transform shadow-sm border border-brand-pink"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-pink-light space-y-6">
          <h2 className="text-2xl font-bold flex items-center text-gray-800">
            <GraduationCap className="w-6 h-6 mr-2 text-brand-pink-dark" />
            教育背景
          </h2>
          <div className="space-y-6">
            <div className="relative pl-6 border-l-2 border-brand-pink/30">
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-brand-pink border-4 border-white rounded-full" />
              <div className="font-bold text-lg">北京邮电大学 (BUPT)</div>
              <div className="text-brand-pink-dark font-medium">
                计算机科学与技术 · 硕士
              </div>
              <div className="text-sm text-gray-400 mt-1">2021 - 2024</div>
            </div>
            <div className="relative pl-6 border-l-2 border-brand-pink/30">
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-brand-pink border-4 border-white rounded-full" />
              <div className="font-bold text-lg">北京邮电大学 (BUPT)</div>
              <div className="text-brand-pink-dark font-medium">
                计算机科学与技术 · 学士
              </div>
              <div className="text-sm text-gray-400 mt-1">2017 - 2021</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-pink-light space-y-6">
          <h2 className="text-2xl font-bold flex items-center text-gray-800">
            <Briefcase className="w-6 h-6 mr-2 text-brand-pink-dark" />
            专业技能
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Vue",
              "Next.js",
              "Node.js",
              "Tailwind CSS",
              "TypeScript",
              "Web Performance",
              "Cloud Computing",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-brand-pink-light text-brand-pink-dark text-sm font-medium rounded-full border border-brand-pink/20"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="space-y-4 pt-4">
            <p className="text-gray-600 flex items-start">
              <MapPin className="w-5 h-5 mr-2 text-brand-pink-dark flex-shrink-0" />
              <span>目前居住在北京</span>
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">精选项目</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "个人主页",
              desc: "基于 React 和 Tailwind CSS 构建的简约个人主页。",
              tech: ["React", "Tailwind"],
            },
            {
              title: "学习笔记库",
              desc: "记录我的学习心得和技术沉淀。",
              tech: ["Markdown", "Search"],
            },
          ].map((project, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-brand-pink/30 hover:border-brand-pink-dark transition-colors group"
            >
              <h3 className="font-bold text-lg mb-2 group-hover:text-brand-pink-dark transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
              <div className="flex gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-gray-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro section */}
      <section className="bg-brand-pink/10 p-8 rounded-3xl border border-brand-pink/20">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">关于我</h2>
        <div className="text-gray-600 space-y-4 leading-relaxed">
          <p>
            在北邮的七年时光里，我系统地学习了计算机基础知识，从底层硬件到上层应用都有所涉猎。
            我特别着迷于前端技术，因为它能直接与用户互动，将冰冷的代码转化为精美的界面。
          </p>
          <p>
            在闲暇时间，我喜欢写博客记录学习心得，同时也热爱探索新的技术栈。
            我坚信，技术是为了更好地服务于人，简单、高效、美观是我追求的目标。
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
