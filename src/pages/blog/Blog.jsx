import React from "react";
import { Container, Row } from "reactstrap";

import Helmet from "../../components/Helmet/Helmet";

import CommonSection from "../../components/UI/commonSection/CommonSection";
import BlogList from "../../components/UI/blogList/BlogList";

const Blog = () => {
  return (
    <Helmet title="Blogs">
      <CommonSection title="Blogs" />
      <section>
        <Container>
          <Row>
            <BlogList />
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Blog;
