import { About } from "./about";
import renderer from "react-test-renderer";

test("testar o Snapshot", () => {
  const aboutFunction = renderer.create(About);
  let result = aboutFunction.toJSON();

  expect(result).toMatchSnapshot();
})
