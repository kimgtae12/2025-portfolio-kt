import React from "react";
import { Typograpy } from "components/atoms/Typograpy";
import { useIcon } from "hooks/useImage";
import Profile from "../../assets/profile.png";

interface ProfilePageProps {
  bringToFront: (page: string) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ bringToFront }) => {
  const { src: profileSrc } = useIcon("profile", "profile_photo.jpeg");
  return (
    <div
      className="flex flex-col gap-[3rem] p-[4rem] min-h-full overflow-y-auto profile-page-container"
      onClick={() => bringToFront("profile")}
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      {/* Header Section */}k{" "}
      <div className="flex items-center gap-[2rem]">
        {/* Profile Photo */}
        <div
          className="flex justify-center items-center shadow-black/20 shadow-lg border-4 border-white/30 rounded-full w-[120px] h-[120px] text-gray-600 text-5xl"
          style={{
            background: profileSrc
              ? `url(${profileSrc}) center/cover`
              : "#f0f0f0",
          }}
        >
          {!profileSrc && "👤"}
        </div>

        {/* Basic Info */}
        <div className="flex-1">
          <Typograpy className="mb-2 font-bold text-[3rem] text-white">
            김경태 Kim Kyeongtae
          </Typograpy>
          <Typograpy type="title" className="mb-1 text-white/90">
            Frontend Developer
          </Typograpy>
          <div className="flex gap-[1rem] mt-2">
            <Typograpy type="body" className="text-white/80">
              📧 kimgtea@naver.com
            </Typograpy>
            <Typograpy type="body" className="text-white/80">
              🐱 github.com/kimgtae12
            </Typograpy>
          </div>
        </div>
      </div>
      {/* Aspiration Section */}
      <div className="bg-white/10 hover:bg-white/20 shadow-md hover:shadow-xl backdrop-blur-lg p-6 border border-white/20 rounded-xl transition-all">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">💡</span>
          <Typograpy type="title" className="text-white">
            포부
          </Typograpy>
        </div>
        <Typograpy type="body" className="text-white/90 leading-relaxed">
          "사용자 중심의 디자인과 최신 기술을 결합하여
          <br />
          즐거운 개발 경험을 만들어가는 프론트엔드 개발자"
        </Typograpy>
      </div>
      {/* Core Competencies */}
      <div className="bg-white/10 hover:bg-white/20 shadow-md hover:shadow-xl backdrop-blur-lg p-6 border border-white/20 rounded-xl transition-all">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🎯</span>
          <Typograpy type="title" className="text-white">
            핵심 역량
          </Typograpy>
        </div>
        <div className="gap-4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          <div className="flex items-center gap-2 hover:bg-white/10 p-2 rounded-lg transition-colors">
            <span className="text-xl">⚛️</span>
            <Typograpy type="body" className="text-white/90">
              React/TypeScript
            </Typograpy>
          </div>
          <div className="flex items-center gap-2 hover:bg-white/10 p-2 rounded-lg transition-colors">
            <span className="text-xl">🎨</span>
            <Typograpy type="body" className="text-white/90">
              UI/UX Design
            </Typograpy>
          </div>
          <div className="flex items-center gap-2 hover:bg-white/10 p-2 rounded-lg transition-colors">
            <span className="text-xl">🔄</span>
            <Typograpy type="body" className="text-white/90">
              상호작용 디자인
            </Typograpy>
          </div>
          <div className="flex items-center gap-2 hover:bg-white/10 p-2 rounded-lg transition-colors">
            <span className="text-xl">💪</span>
            <Typograpy type="body" className="text-white/90">
              문제 해결 능력
            </Typograpy>
          </div>
        </div>
      </div>
      <div className="mt-auto pt-8 text-center">
        <Typograpy type="caption" className="text-white/70">
          🚀 끊임없이 배우고 성장하는 개발자
        </Typograpy>
      </div>
    </div>
  );
};
