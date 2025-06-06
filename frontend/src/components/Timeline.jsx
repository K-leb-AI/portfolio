import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaKey } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";

const Timeline = (props) => {
  return (
    <div>
      <VerticalTimeline animate={true} lineColor="var(--bg-3)">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--white)",
            color: "#fff",
            boxShadow: "none",
            borderRadius: "10px",
            padding: "30px",
          }}
          contentArrowStyle={{ borderRight: "8px solid  var(--white)" }}
          date="2025"
          dateClassName="text-white-2 font-mono text-xs font-light"
          iconStyle={{
            background: "var(--white)",
            color: "var(--bg-1)",
            boxShadow: "none",
            border: "var(--button) 1px solid",
          }}
          icon={<FaBriefcase />}
          position="right"
        >
          <h3 className="font-bold text-bg-1">Volunteer</h3>
          <h3 className="text-xs font-semibold mt-1 text-bg-1">Ed Emporia</h3>
          <div className="flex flex-wrap gap-1 mt-4">
            <h1 className="text-bg-1 font-light leading-4 text-xs pl-3 border-l-3 border-bg-1 italic">
              Assist the startup by designing the product packages and
              facilitating sales of components that enhance STEM education in
              Ghana.
            </h1>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--white)",
            color: "#fff",
            boxShadow: "none",
            borderRadius: "10px",
            padding: "30px",
          }}
          contentArrowStyle={{ borderRight: "8px solid  var(--white)" }}
          date="2024-present"
          dateClassName="text-white-2 font-mono text-xs font-light"
          iconStyle={{
            background: "var(--white)",
            color: "var(--bg-1)",
            boxShadow: "none",
            border: "var(--button) 1px solid",
          }}
          icon={<FaBriefcase />}
          position="right"
        >
          <h3 className="font-bold text-bg-1">Research Assistant</h3>
          <h3 className="text-xs font-semibold mt-1 text-bg-1">Cynosol Labs</h3>
          <div className="flex flex-wrap gap-1 mt-4">
            <h1 className="text-bg-1 font-light leading-4 text-xs pl-3 border-l-3 border-bg-1 italic">
              Assisted in the collection of data, review of literature and
              writing for 4 research projects focused on the operation of
              innovation systems in the context of the Global South.
            </h1>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--bg-2)",
            color: "#fff",
            boxShadow: "none",
            borderRadius: "10px",
            padding: "30px",
          }}
          contentArrowStyle={{ borderRight: "8px solid  var(--bg-2)" }}
          date="2020-2024"
          dateClassName="text-white-2 font-mono text-xs font-light"
          iconStyle={{
            background: "var(--bg-2)",
            color: "var(--white)",
            boxShadow: "none",
            border: "var(--border) 1px solid",
          }}
          icon={<FaGraduationCap />}
        >
          <h3 className="font-bold text-white">Computer Engineering</h3>
          <h3 className="text-xs font-semibold mt-1 text-white-2">
            Kwame Nkrumah University of Science and Technology
          </h3>
          <h3 className="font-mono text-xs font-semibold mtw-1 text-white-2">
            GPA: 3.76
          </h3>
          <div className="flex flex-wrap gap-1 mt-4">
            <h1 className="text-white-2 font-light leading-5 text-xs">
              Calculus, Algebra, Statistics and Probability, Basic Programming
              Concepts, Ethical Engineering, Data Structures, Object Oriented
              Programming, Database Systems, Software Engineering, Computer
              Architecture.
            </h1>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--white)",
            color: "#fff",
            boxShadow: "none",
            borderRadius: "10px",
            padding: "30px",
          }}
          contentArrowStyle={{ borderRight: "8px solid  var(--white)" }}
          date="2024-2025"
          dateClassName="text-white-2 font-mono text-xs font-light"
          iconStyle={{
            background: "var(--white)",
            color: "var(--bg-1)",
            boxShadow: "none",
            border: "var(--button) 1px solid",
          }}
          icon={<FaBriefcase />}
          position="right"
        >
          <h3 className="font-bold text-bg-1">Graphic Designer</h3>
          <h3 className="text-xs font-semibold mt-1 text-bg-1">
            Stunning Concepts
          </h3>
          <div className="flex flex-wrap gap-1 mt-4">
            <h1 className="text-bg-1 font-light leading-4 text-xs pl-3 border-l-3 border-bg-1 italic">
              Designed beautiful flyers to enhance the social presence of the
              business and engage the target market.
            </h1>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--white)",
            color: "#fff",
            boxShadow: "none",
            borderRadius: "10px",
            padding: "30px",
          }}
          contentArrowStyle={{ borderRight: "8px solid  var(--white)" }}
          date="2023"
          dateClassName="text-white-2 font-mono text-xs font-light"
          iconStyle={{
            background: "var(--white)",
            color: "var(--bg-1)",
            boxShadow: "none",
            border: "var(--button) 1px solid",
          }}
          icon={<FaBriefcase />}
          position="right"
        >
          <h3 className="font-bold text-bg-1">Database Management Intern</h3>
          <h3 className="font-mono text-xs font-semibold mt-1 text-bg-1">
            Agricultural Development Bank
          </h3>
          <div className="flex flex-wrap gap-1 mt-4">
            <h1 className="text-bg-1 font-light leading-4 text-xs pl-3 border-l-3 border-bg-1 italic">
              Understudied the Database Administrator to learn the fundamentals
              of operating, managing, and optimising an Oracle Database
            </h1>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--white)",
            color: "#fff",
            boxShadow: "none",
            borderRadius: "10px",
            padding: "30px",
          }}
          contentArrowStyle={{ borderRight: "8px solid  var(--white)" }}
          date="2023"
          dateClassName="text-white-2 font-mono text-xs font-light"
          iconStyle={{
            background: "var(--white)",
            color: "var(--bg-1)",
            boxShadow: "none",
            border: "var(--button) 1px solid",
          }}
          icon={<FaBriefcase />}
          position="right"
        >
          <h3 className="font-bold text-bg-1">UI/UX Design Intern</h3>
          <h3 className="text-xs font-semibold mt-1 text-bg-1">
            BestPrice Electronics Ghana
          </h3>
          <div className="flex flex-wrap gap-1 mt-4">
            <h1 className="text-bg-1 font-light leading-4 text-xs pl-3 border-l-3 border-bg-1 italic">
              Successfully redesigned user interfaces with principles of web
              design to replace an existing e-commerce platform to enhance the
              user experience and enhance the unique brand of the company.
            </h1>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "var(--white)",
            color: "#fff",
            boxShadow: "none",
            borderRadius: "10px",
            padding: "30px",
          }}
          contentArrowStyle={{ borderRight: "8px solid  var(--white)" }}
          date="2022"
          dateClassName="text-white-2 font-mono text-xs font-light"
          iconStyle={{
            background: "var(--white)",
            color: "var(--bg-1)",
            boxShadow: "none",
            border: "var(--button) 1px solid",
          }}
          icon={<FaBriefcase />}
          position="right"
        >
          <h3 className="font-bold text-bg-1">Junior Frontend Developer</h3>
          <h3 className="font-mono text-xs font-semibold mt-1 text-bg-1">
            Qasemo
          </h3>
          <div className="flex flex-wrap gap-1 mt-4">
            <h1 className="text-bg-1 font-light leading-4 text-xs pl-3 border-l-3 border-bg-1 italic">
              Developed landing pages, ensuring responsive and engaging user
              interfaces.
            </h1>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "var(--bg-2)",
            color: "#fff",
            boxShadow: "none",
            borderRadius: "10px",
            padding: "30px",
          }}
          contentArrowStyle={{ borderRight: "8px solid  var(--bg-2)" }}
          date="2017-2020"
          dateClassName="text-white-2 font-mono text-xs font-light"
          iconStyle={{
            background: "var(--bg-2)",
            color: "var(--white)",
            boxShadow: "none",
            border: "var(--border) 1px solid",
          }}
          icon={<FaGraduationCap />}
          position="left"
        >
          <h3 className="font-bold text-white">General Science</h3>
          <h3 className="font-mono text-xs font-semibold mt-1 text-white-2">
            Mfantsipim School
          </h3>
          <div className="flex flex-wrap gap-1 mt-4">
            <h1 className="text-white-2 font-light leading-5 text-xs">
              Physics, Chemistry, Advanced Mathematics, Technical Drawing,
              Leadership Skills, Public Speaking, Gentleman's Courtesy.
            </h1>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{
            background: "var(--accent)",
            color: "var(--bg-2)",
            boxShadow: "none",
          }}
          icon={<FaStar />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
