import { render } from "@testing-library/react";
import { TodoInput } from "./TodoInput";
import { describe, expect, test } from "@jest/globals";

describe("TodoInput Test", () => {
  test("todo를 입력하면 todos에 텍스트와 완료여부, 날짜가 저장된다.", () => {
    render(<TodoInput />);
    const todo = {};
  });
});
