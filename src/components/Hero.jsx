import { useEffect, useRef, useState } from "react";
import "./Hero.css";

const LINES = [
  { prompt: "whoami", output: "Vaishnavi N.G, CSE student & full-stack developer" },
  { prompt: "cat focus.txt", output: "React, Flask, MySQL, DSA, and a growing interest in AI agents" },
  { prompt: "status --current", output: "Open to internships and entry-level developer roles" },
];

function useTypedLines(lines, active) {
  const [renderedLines, setRenderedLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState("prompt"); // prompt -> output -> done
  const doneRef = useRef(false);

  useEffect(() => {
    if (!active || doneRef.current) return;
    if (lineIndex >= lines.length) {
      doneRef.current = true;
      return;
    }

    const current = lines[lineIndex];
    const target = phase === "prompt" ? current.prompt : current.output;

    if (charIndex <= target.length) {
      const speed = phase === "prompt" ? 42 : 14;
      const t = setTimeout(() => setCharIndex((c) => c + 1), speed);
      return () => clearTimeout(t);
    }

    if (phase === "prompt") {
      const t = setTimeout(() => {
        setPhase("output");
        setCharIndex(0);
      }, 220);
      return () => clearTimeout(t);
    }

    setRenderedLines((r) => [...r, current]);
    const t = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setPhase("prompt");
      setCharIndex(0);
    }, 380);
    return () => clearTimeout(t);
  }, [active, lineIndex, charIndex, phase, lines]);

  const current = lines[lineIndex];
  const partial =
    current && !doneRef.current
      ? {
          prompt: phase === "prompt" ? current.prompt.slice(0, charIndex) : current.prompt,
          output: phase === "output" ? current.output.slice(0, charIndex) : "",
        }
      : null;

  return { renderedLines, partial, finished: lineIndex >= lines.length };
}

export default function Hero() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setActive(true), 350);
    return () => clearTimeout(t);
  }, []);

  const { renderedLines, partial, finished } = useTypedLines(LINES, active);

  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__location">Madurai, Tamil Nadu</p>
          <h1 className="hero__name">Vaishnavi N.G</h1>
          <p className="hero__role">
            Computer Science Engineering student who builds full-stack web
            applications and is learning to design AI agents.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              See my work
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero__terminal" aria-hidden="true">
          <div className="terminal__bar">
            <span className="terminal__dot" />
            <span className="terminal__dot" />
            <span className="terminal__dot" />
            <span className="terminal__title">vaishnavi@portfolio</span>
          </div>
          <div className="terminal__body">
            {renderedLines.map((l, i) => (
              <div className="terminal__block" key={i}>
                <p className="terminal__line">
                  <span className="terminal__prompt">$</span> {l.prompt}
                </p>
                <p className="terminal__output">{l.output}</p>
              </div>
            ))}
            {partial && (
              <div className="terminal__block">
                <p className="terminal__line">
                  <span className="terminal__prompt">$</span> {partial.prompt}
                  {!partial.output && <span className="terminal__cursor" />}
                </p>
                {partial.output && (
                  <p className="terminal__output">
                    {partial.output}
                    <span className="terminal__cursor" />
                  </p>
                )}
              </div>
            )}
            {finished && (
              <p className="terminal__line">
                <span className="terminal__prompt">$</span>
                <span className="terminal__cursor" />
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
