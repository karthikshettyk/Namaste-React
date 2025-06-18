import {Sum} from "../Sum";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should be calculate the sum of two numbers",()=>{
    const result = Sum(1,3);

    //assertion
    expect(result).toBe(4);
});

