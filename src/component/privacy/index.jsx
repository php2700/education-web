import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const TermCondition = () => {
  const headingRef = useRef();
  const location = useLocation();

  useEffect(() => {
    if (headingRef?.current) {
      headingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location?.pathname]);

  return (
    <div className="bg-[#F0F8FF]">
      <div className="max-w-6xl mx-auto px-6 py-14 text-gray-700 leading-relaxed">
        {/* PAGE TITLE */}
        <h1
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          Terms & Conditions
        </h1>

        {/* MAIN CARD */}
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          {/* IMPORTANT HEADER */}
          <h2 className="text-xl font-semibold text-gray-900">
            PLEASE READ THE FOLLOWING CAREFULLY
          </h2>

          <p>
            This statement provides general information about the privacy
            statement of this website and its related apps (mobile or
            otherwise). If you are under 18 years of age, please be sure to read
            this privacy statement with your parents or guardian and ask them
            questions about what you do not understand.
          </p>

          <p className="font-medium text-gray-800">
            Your use of this service constitutes acceptance by you of this
            privacy statement.
          </p>

          {/* HORIZONTAL LINE */}
          <hr className="my-6" />

          {/* COMPANY INFO */}
          <p>
            <strong>GGES</strong> and its subsidiaries and affiliates (“GGES”)
            are providing you this site and its related applications and
            services (collectively, “Service”). The Service may be delivered to
            you through the Internet via your browser or app (mobile or
            otherwise).
          </p>

          <p>
            This privacy statement (“Privacy Statement”) discloses how we
            collect, protect, use and share information gathered on this
            Service.
          </p>

          <p>
            Your use of this Service is further subject to the terms of use
            (“Terms of Use“) posted on this website or app (this Privacy
            Statement is part of the Terms of Use).
          </p>
          <p>
            You should review this privacy policy on a regular basis. Gges
            reserves the right to revise this privacy statement at any time,
            including to address new issues or reflect changes to our service.
            Such revisions become effective immediately upon notice to you.
            Notice may be given by any means including, but not limited to,
            posting the revised privacy statement on this service. Your use of
            this service subsequent to our revision shall be deemed to
            constitute acceptance by you of the revised terms.
          </p>

          <h2 className="text-xl font-bold text-gray-900">
            Information Collected and Purpose of Collection
          </h2>

          <p>
            GGES may request and store certain types of personally identifying
            information about you when you use this Service. We consider the
            following to be examples of personally identifying information: your
            first and last name, email address, home address, phone number, date
            of birth, social security number, credit card and banking
            information, and other similar information. GGES does not collect
            personally identifying information about you unless it is
            voluntarily provided. It is your choice whether to share personally
            identifying information with us but please keep in mind that in some
            instances such information will be required in order to participate
            in activities within the Service
          </p>

          <p className="font-medium">
            Please note that we do not consider any information that is not
            associated with your personally identifying information (anonymized
            or aggregated information) to be personally identifying information.
          </p>

          <p>
            The information we learn from you, including personally identifiable
            information, helps us personalize and continually improve your
            experience and use of this Service so that we can further serve your
            needs and our business needs
            <span className="font-semibold">
              {" "}
              By using the service, you are consenting to these uses and others
              as specified herein and in the terms of use.
            </span>
          </p>

          <p>
            When you conduct a purchase transaction through this Service, you
            are providing transaction information to our third-party suppliers
            (such as transaction processors and financial institutions) who will
            use the information solely for processing your requested
            transaction. There may also be other third-party vendors who supply
            software applications, web hosting and other technologies and/or
            services for this Service that may have access to your personally
            identifying information but, unless they get express permission from
            you, they will not use such information for any other purpose other
            than to provide services in connection with this Service.
          </p>

          <p>
            During your use of the Service you may generate or upload certain
            content (“User Content”) to the Service and we may store and link
            such User Content to your personally identifying information. In
            addition, either we or our third-party service providers may collect
            information about your usage of a respective service, time spent on
            a service, pages visited and detailed session data in connection
            with a specific service and other similar information (“Service
            Usage Information”). We may use this User Content and Service Usage
            Information in combination with your personally identifying
            information to customize your experience using the Service by, among
            other things, making recommendations or forecasts. We may also use
            your User Content and Service Usage Information to suggest other
            features on the Service that we believe may be interesting to you.
            Please refer to section below entitled “Cookies and Other Technology
            Used to Collect Information” for more information on the process and
            methodology of collecting and sharing certain Service Usage
            Information
          </p>
        </div>

        {/* ===================== CHILDREN & PARENTS NOTICE ===================== */}
        <div className="bg-white shadow-md rounded-2xl p-8 space-y-6 mt-10 border-l-4 border-[#0572E6]">
          <h2 className="text-xl font-bold text-gray-900">
            Special Notice to Parents, Teachers and Children
          </h2>

          <p className="font-semibold">Parents and Teachers:</p>
          <p>
            We encourage parents, guardians and teachers to spend time with
            children when using the Service. We will never require a Child (12
            years and under) to provide personally identifiable information
            beyond what is reasonably necessary.
          </p>

          <p className="font-semibold">Children:</p>
          <p>
            Please do not give your full name, email, home address, or phone
            number without permission from a parent, guardian, or teacher.
          </p>

          <p>
            We do not knowingly collect personal information from Children
            except when voluntarily provided via a "Contact Us" feature. If we
            discover such data, we will remove it as soon as possible.
          </p>
          <h2 className="text-xl font-bold text-gray-900">
            Special Notice to Parents, Teachers and Children
          </h2>

          <p className="font-semibold text-gray-800">Parents and Teachers:</p>

          <p>
            When using this Service, we encourage parents, guardians and
            teachers to spend time with their children, especially if the child
            is 12 and under (“Child” or “Children”).
          </p>

          <p>
            We will never request personally identifiable information from a
            Child in any of our public postings areas. We will not require a
            Child to disclose more personally identifiable information than is
            reasonably necessary to participate in any online activity.
          </p>

          <p className="font-bold text-red-600 uppercase">
            We ask parents to help us protect their children’s privacy by
            instructing them never to provide personally identifiable
            information on this service or any other site without first getting
            parental/guardian or teacher permission.
          </p>
          <h3 className="text-lg font-bold text-gray-900">Children</h3>

          <p className="font-semibold text-gray-800">Please read carefully:</p>

          <p>
            Please do not give your full name, email address, home address,
            telephone number or any other personally identifiable information
            that would enable someone to contact you either online or offline,
            without first asking your parent/guardian or teacher for permission.
          </p>

          <p>
            We do not knowingly collect personally identifiable information from
            Children either directly or passively, except when a Child
            voluntarily submits such information through a “Contact Us” link or
            a public posting area within the Service, if such feature is
            available.
          </p>

          <p>
            If a Child emails us via a “Contact Us” link on any child-directed
            area of this Site and we can identify the sender as a Child, any
            personally identifiable information submitted will only be used to
            respond on a one-time basis to such Child.
          </p>

          <p className="font-semibold text-gray-700">
            In addition, if we have actual knowledge that a Child is sending or
            posting personally identifiable information on any area of the
            Service, we will use commercially reasonable efforts to delete such
            personally identifiable information as soon as practicable.
          </p>
          <h3 className="text-lg font-bold text-gray-900">
            Sharing of Personally Identifying Information with Third Parties
          </h3>

          <p>
            We will not share any personally identifying information about you
            with any third party (a party not affiliated with GGES) except as
            otherwise stated herein and in the following circumstances:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              In response to subpoenas, court orders or legal process, to the
              extent required and as restricted by law.
            </li>

            <li>
              When disclosure is required to maintain the security and integrity
              of this Service, or to protect any user’s security or the security
              of other persons, consistent with applicable laws.
            </li>

            <li>
              When disclosure is directed or consented to by the user who has
              inputted the personally-identifying information.
            </li>

            <li>
              In the event that GGES or any subdivision goes through a business
              transition (merger, divestiture, acquisition, liquidation, or sale
              of assets). Your personal information may be part of the
              transferred assets.
            </li>

            <li>
              In limited circumstances, GGES may disclose your email address to
              comply with laws and regulations such as the CAN-SPAM Act of 2003.
            </li>

            <li>To enforce the Terms of Use.</li>
          </ul>
          <h3 className="text-lg font-bold text-gray-900">
            Third-Party Analytic Services
          </h3>

          <p className="text-gray-700 mt-2">
            GGES may use a third-party service, such as Google Analytics, to
            collect anonymous visitor data on our network of sites,
            applications, and online services. The third-party service will not
            collect any personally identifiable information from users of the
            Service.
          </p>

          <p className="text-gray-700 mt-2">Anonymous data may include:</p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>IP addresses</li>
            <li>Browser types (Chrome, Firefox, Safari, Edge, etc.)</li>
            <li>Accessing application or device</li>
            <li>Referring pages and websites</li>
          </ul>

          <p className="text-gray-700 mt-2">
            This data may be used for the following purposes:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Anonymous statistical analysis of website traffic</li>
            <li>Administration of services and servers</li>
            <li>Auditing and compliance monitoring</li>
            <li>Improving products and services</li>
            <li>Ensuring compliance with our Terms of Use</li>
          </ul>

          {/* ----------------------------------------------------- */}

          <h3 className="text-lg font-bold text-gray-900 mt-6">
            Cookies and Other Technology Used to Collect Information
          </h3>

          <p className="text-gray-700 mt-2">
            GGES may receive and store certain information through the use of
            cookies and similar technologies whenever you interact with this
            Service.
          </p>

          <p className="text-gray-700 mt-2">
            Cookies are small text files stored on your device that help to:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Speed up navigation on the Service</li>
            <li>Recognize returning users</li>
            <li>Track usage preferences</li>
            <li>Improve performance and security</li>
            <li>Identify browser, OS, domain and IP address details</li>
          </ul>

          <p className="text-gray-700 mt-2">
            You can adjust your browser settings to refuse or delete cookies.
            However, disabling cookies may prevent certain parts of this Service
            from working properly. We recommend keeping cookies enabled for the
            best experience.
          </p>

          <p className="text-gray-700 mt-2">
            GGES may also use pixel images, web beacons, and similar
            technologies to:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Track usage of the Service</li>
            <li>Monitor effectiveness of promotions and campaigns</li>
            <li>Identify access time, browser, OS, domain and IP address</li>
          </ul>

          {/* ----------------------------------------------------- */}

          <h3 className="text-lg font-bold text-gray-900 mt-6">
            Sharing of Non-Personally Identifying Information with Third Parties
          </h3>

          <p className="text-gray-700 mt-2">
            GGES may share anonymous and non-personally identifying information
            with third parties (including advertising companies and networks)
            collected through the Service, cookies, or Beacon technologies.
          </p>

          <p className="font-semibold text-gray-700 mt-2">
            We do NOT share any personally identifiable information in these
            cases.
          </p>

          <p className="text-gray-700 mt-2">
            By using the Service, you agree that GGES may use, license, and
            distribute such anonymized data for purposes including:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Market evaluation</li>
            <li>Product assessment and improvement</li>
            <li>Educational research</li>
            <li>Marketing and commercial analysis</li>
          </ul>
          <h3 className="text-lg font-bold text-gray-900">
            Security, Purchases and Credit Card Use
          </h3>
          <p>
            GGES has security measures in place to protect the loss, misuse, and
            alteration of the information under our control. Essentially, we
            encrypt all transmission of sensitive data and secure all of our
            repositories of data. When you use your credit card to shop at GGES,
            your transaction is secure. Our servers use Secure Sockets Layer
            (SSL), an advanced encryption technology that works with most major
            browsers. This technology safeguards your personal information and
            privacy. However, you should understand that “perfect security” is
            never guaranteed.
          </p>

          <h4 className="text-md font-semibold text-gray-900">
            Nature of Data on the Internet
          </h4>
          <p>
            Due to the complexity and open nature of the Internet, there is
            always a risk that information collected by and/or displayed on the
            Service may be compromised or accessed notwithstanding the
            implementation of reasonable data security measures by GGES. To
            mitigate such risks, you should:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Use secure usernames and passwords and carefully protect them from
              disclosure.
            </li>
            <li>
              Implement updated internet security and virus protection software
              on your computer system.
            </li>
          </ul>
          <p>
            Should you suspect that your computer’s security has been
            compromised or that your username or password may have been accessed
            by a third party, please contact us immediately and request to have
            your password changed.
          </p>

          <h4 className="text-md font-semibold text-gray-900">
            Cross-Border Transfer of Data
          </h4>
          <p>
            Any personally identifiable information you provide to GGES in
            connection with this Service will be stored on GGES’s servers or
            those of its affiliates and/or authorized vendors and will be
            accessible by authorized employees, agents, and contractors of GGES
            and its affiliates and authorized vendors. Due to the global nature
            of the Service, personally identifiable information may be
            transmitted, stored or processed in a country other than the one in
            which you reside (“Resident Jurisdiction”), including primarily in
            the United States, the European Union, and India.
          </p>
          <p>
            Reasonable contractual or other measures GGES may take to protect
            your personally identifiable information while outside the Resident
            Jurisdiction are subject to applicable foreign legal requirements,
            for example, lawful requirements by governmental authorities or
            court order to disclose personally identifiable information to
            government authorities in the countries in which such data may be
            stored or processed.
          </p>
          <p className="font-semibold">
            Subject to applicable law, if you reside in the european union,
            canada or other jurisdiction with similar data transfer regulations,
            by accepting the terms of this agreement, you explicitly consent
            that the personally identifiable information you provide may be
            transferred and stored in countries outside the eu, canada or your
            resident jurisdiction, including the united states, in connection
            with the terms of use, this privacy statement, and in order to
            provide services to you. If you do not consent, please do not
            provide us with any personal information. Your personal information
            shall only be used in accordance with the terms of this privacy
            statement.
          </p>
        </div>
      </div>
    </div>
  );
};
