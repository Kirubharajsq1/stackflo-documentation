import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Simplified Compliance Onboarding",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Stackflo is built to get your compliance documentation and audits up and
        running quickly, enabling teams to focus on actual implementation rather
        than setup hassles.
      </>
    ),
  },
  {
    title: "Focus on What Matters Most",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        With Stackflo, streamline policy management, risk assessments, and
        control mappings. Let automation handle the noise so you can focus on
        improving security and staying audit-ready.
      </>
    ),
  },
  {
    title: " Powered by Modern Tech (React)",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Built with React, Stackflo enables flexible UI extensions, seamless user
        experience, and fast performance — all while reusing compliant
        components across your documentation and reporting.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
