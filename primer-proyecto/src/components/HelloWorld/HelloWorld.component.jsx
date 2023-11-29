import PropTypes from "prop-types";
export function HelloWorld({ title }) {
  const greeting = `Hello ${title}`;
  return <h1>{greeting}</h1>;
}

HelloWorld.propTypes = { title: PropTypes.string.isRequired };
