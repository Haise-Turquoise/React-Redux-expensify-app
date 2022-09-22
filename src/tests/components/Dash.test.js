import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";
import DashPage from '../../components/Dash';
import NotFoundPage from '../../components/NotFound';
import moment from "moment";

test("should render DashPage with expenses", () => {
    const wrapper = shallow(<DashPage />);
    expect(wrapper).toMatchSnapshot();
    }
);