import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should render ExpenseListItem with expenses", () => {
    console.log('expense[0]: ',{...expenses[0]});
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
    }
);