import { render,screen } from "@testing-library/react";
import RestaturantCard from "../RestaturantCard";
import mockData from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render the restaturant card with mock data",()=>{
    render(<RestaturantCard></RestaturantCard>)
})