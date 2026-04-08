import { Typograpy } from "components/atoms/Typograpy";
import { contactLinks } from "data/portfolioData";
import React from "react";

const ContactWindow = () => {
  return (
    <div className="content-stack">
      <section className="content-card">
        <div className="content-card__header">
          <Typograpy as="span" className="mono" type="caption">
            CONTACT
          </Typograpy>
          <strong>연락을 기다리고 있습니다.</strong>
        </div>
        <Typograpy as="p" type="body">
          채용, 협업, 프로젝트 관련 대화를 언제든 환영합니다. 가장빠른 채널은
          Email과 Instargram입니다.
        </Typograpy>
      </section>

      <section className="info-grid">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            className="contact-link"
            href={link.href}
            rel="noreferrer"
            target="_blank"
          >
            <strong>{link.label}</strong>
            <Typograpy as="span" type="body">
              {link.caption}
            </Typograpy>
          </a>
        ))}
      </section>
    </div>
  );
};

export default ContactWindow;
