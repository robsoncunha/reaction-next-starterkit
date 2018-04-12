import React from "react";
import renderer from "react-test-renderer";
import MobileNavigationItem from "./MobileNavigationItem";

const testMenuItem = {
  _id: "123",
  name: "Shop",
  slug: "shop"
};

const testMenuItemWithRelatedTags = {
  _id: "123",
  name: "Shop",
  slug: "shop",
  relatedTags: [
    { _id: "111", name: "Clothes", slug: "clothes" },
    { _id: "222", name: "Shoes", slug: "shoes" },
    { _id: "333", name: "Accessories", slug: "accessories" }
  ]
};

test("basic snapshot", () => {
  const component = renderer.create(<MobileNavigationItem navItmes={testMenuItem} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("snapshot with related items", () => {
  const component = renderer.create(<MobileNavigationItem navItmes={testMenuItemWithRelatedTags} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});