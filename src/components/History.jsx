import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const History = () => {
  return (
    <div className='md:ml-12'>
        <div>
            <h2 className='text-color text-center md:text-4xl text-3xl font-bold'>My Journey As Programmer / Web Developer</h2>
        </div>
    <VerticalTimeline className='md:mt-12 mt-8'>
        
        <VerticalTimelineElement
            className="vertical-timeline-element--work text-color"
            contentStyle={{ background: 'rgb(43,89,116)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(43,89,116)' }}
            date="3rd Year College - Present"
            iconStyle={{ background: 'rgb(43,89,116)' }}
            
        >
            <h3 className="vertical-timeline-element-title">Rizal Technological University Boni Campus</h3>
            <h4 className="vertical-timeline-element-subtitle">Student</h4>
            <p>
            Currently, exploring Vite + React and Tailwind CSS for front-end development. Also, studying Python as part of my school coursework to enhance my programming skills across front end.
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--work text-color"
            contentStyle={{ background: 'rgb(145, 68, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(145, 68, 99)' }}
            date="2nd Year College"
            iconStyle={{ background: 'rgb(145, 68, 99)' }}
            
        >
            <h3 className="vertical-timeline-element-title">Rizal Technological University Boni Campus</h3>
            <h4 className="vertical-timeline-element-subtitle">Student</h4>
            <p>
            I immersed myself in backend development using tools like MySQL with XAMPP and PHP. Concurrently, I explored the essentials of Vanilla JavaScript, gaining a holistic understanding useful for my Web Development.
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--work text-color"
            contentStyle={{ background: 'rgb(43,89,116)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(43,89,116)' }}
            date="1st Year College"
            iconStyle={{ background: 'rgb(43,89,116)' }}
            
        >
            <h3 className="vertical-timeline-element-title">Rizal Technological University Boni Campus</h3>
            <h4 className="vertical-timeline-element-subtitle">Student</h4>
            <p>
            Throughout this period, I dedicated time to advancing my programming expertise, delving deep into C++ and mastering it up to an advanced level. This comprehensive exploration has enriched my understanding of complex programming concepts.
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--work text-color"
            contentStyle={{ background: 'rgb(145, 68, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(145, 68, 99)' }}
            date="12th Grade Senior High"
            iconStyle={{ background: 'rgb(145, 68, 99)' }}
            
        >
            <h3 className="vertical-timeline-element-title">Pasay City North High School Tramo Campus</h3>
            <h4 className="vertical-timeline-element-subtitle">Student</h4>
            <p>
            During this time, I ventured into the realm of digital art, honing my skills with a pentab and the Krita application. Additionally, I explored the fascinating world of 2D animation, expanding my creative abilities in the digital arts.
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--work text-color"
            contentStyle={{ background: 'rgb(43,89,116)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(43,89,116)' }}
            date="11th Grade Senior High"
            iconStyle={{ background: 'rgb(43,89,116)' }}
            
        >
            <h3 className="vertical-timeline-element-title">Pasay City North High School Tramo Campus</h3>
            <h4 className="vertical-timeline-element-subtitle">Student</h4>
            <p>
            Over this timeframe, I immersed myself in Java, mastering its fundamentals up to object-oriented programming, including concepts like inheritance, encapsulation, and constructors. Furthermore, I applied my knowledge by working with JFrame, enhancing my skills in graphical user interface (GUI) development.
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--work text-color"
            contentStyle={{ background: 'rgb(145, 68, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(145, 68, 99)' }}
            date="10th Grade High School"
            iconStyle={{ background: 'rgb(145, 68, 99)' }}
            
        >
            <h3 className="vertical-timeline-element-title">Pasay City North High School Tramo Campus</h3>
            <h4 className="vertical-timeline-element-subtitle">Student</h4>
            <p>
            Throughout this learning journey, I delved into HTML in its pure form, excluding the applications of CSS and JavaScript. My focus was on manipulating elements such as <code>&lt;ul&gt;</code>, <code>&lt;li&gt;</code>, and other HTML structures, establishing a strong foundation in the core aspects of web development.
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            iconStyle={{ background: 'rgb(11,48,57)', color: '#fff' }}
            
        />
    </VerticalTimeline>
</div>
  );
}

export default History