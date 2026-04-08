import { Typograpy } from "components/atoms/Typograpy";
import { strengths } from "data/portfolioData";
import React from "react";

const AboutWindow = () => {
  return (
    <div className="content-stack">
      <section className="content-card">
        <div className="content-card__header">
          <Typograpy as="span" className="mono" type="caption">
            ABOUT ME
          </Typograpy>
          <strong>직무와 일하는 방식</strong>
        </div>
        <Typograpy as="h2" className={"section-title font-bold"}>
          Frontend Developer · 4년 2개월
        </Typograpy>
        <Typograpy as="p" type="body">
          서비스 목적에 맞는 정보 구조를 설계하고, UI 구현 디테일과 유지보수
          가능성을 함께 챙기는 프론트엔드 개발자입니다. React, Next.js, React
          Native 기반의 프로젝트에서 구조를 빠르게 이해하고 정리하는 역할을 자주
          맡아왔습니다.
        </Typograpy>
      </section>

      <section className="content-card">
        <div className="content-card__header">
          <Typograpy as="span" className="mono" type="caption">
            STRENGTH
          </Typograpy>
          <strong>강점 {strengths.length}가지</strong>
        </div>
        <div className="info-grid">
          {strengths.map((strength) => (
            <article key={strength.title} className="mini-card">
              <strong>{strength.title}</strong>
              <Typograpy as="p" type="body">
                {strength.description}
              </Typograpy>
            </article>
          ))}
        </div>
      </section>

      <section className="content-card">
        <div className="content-card__header">
          <Typograpy as="span" className="mono" type="caption">
            COLLABORATION
          </Typograpy>
          <strong>협업 스타일</strong>
        </div>
        <ul>
          <li>
            요구사항을 화면·상태·예외 흐름 단위로 나눠 설명하고 정리합니다.
          </li>
          <li>
            디자인 의도를 구현 제약과 함께 조율하며, 가능한 대안을 빠르게
            제시합니다.
          </li>
          <li>
            일정과 품질 사이에서 우선순위를 판단하고 끝까지 책임지는 편입니다.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutWindow;
