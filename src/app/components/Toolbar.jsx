import React from "react";

const Menu = React.forwardRef(({ className, ...props }, ref) => (
  <div {...props} ref={ref} className={className} />
));

const Toolbar = React.forwardRef(({ className, ...props }, ref) => (
  <Menu {...props} ref={ref} className={className} />
));

export default Toolbar;
