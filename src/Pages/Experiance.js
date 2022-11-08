import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import InternIcon from "@mui/icons-material/DeveloperMode";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#1a5402">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2006 - 2014"
          iconStyle={{ background: "#1a5402", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Nejdet Bıçakçıoğlu İlk-Orta Okulu
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "#1a5402", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Farabi Anadolu Lisesi
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#1a5402", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Düzce Üniversitesi
          </h3>
          <p></p>
          <h4 className="vertical-timeline-element-subtitle">
           Yönetim Bilişim Sistemleri
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021"
          iconStyle={{ background: "#540000", color: "#fff" }}
          icon={<InternIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Open Yazılım - Staj
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           2 ay
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: "#540000", color: "#fff" }}
          icon={<InternIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Düzce Gençlik ve Spor İl Müdürlüğü   - Staj
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           5 ay
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;