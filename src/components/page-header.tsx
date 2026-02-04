import { useRender } from "@base-ui/react";
import type { Post } from "contentlayer/generated";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

import * as time from "~/libs/time";
import { cn } from "~/utils/cn";

import { Heading } from "./ui/heading";

interface PageHeaderProps extends ComponentPropsWithoutRef<"div"> {}

const Root = ({ className, children, ...props }: PageHeaderProps) => {
  return (
    <div className={cn("mb-7", className)} {...props}>
      {children}
    </div>
  );
};

/* ---- Title ---- */

interface TitleProps extends ComponentPropsWithoutRef<typeof Heading> {}

const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Heading ref={ref} className={cn("text-lg", className)} {...props}>
        {children}
      </Heading>
    );
  },
);
Title.displayName = "PageHeader.Title";

/* ---- Description ---- */

interface DescriptionProps extends ComponentPropsWithoutRef<"p"> {
  render?: useRender.RenderProp;
}

const Description = forwardRef<HTMLParagraphElement, DescriptionProps>(
  ({ render, className, ...props }, ref) => {
    const defaultProps: useRender.ElementProps<"p"> = {
      className: cn("text-second text-sm leading-7", className),
      ...props,
    };

    return useRender({
      ref,
      render,
      defaultTagName: "p",
      props: defaultProps,
    });
  },
);
Description.displayName = "PageHeader.Description";

/* ---- Date ---- */

interface PublishDateProps extends ComponentPropsWithoutRef<"time"> {
  date: Post["date"];
}

const PublishDate = forwardRef<HTMLTimeElement, PublishDateProps>(
  ({ date, className, ...props }, ref) => {
    return (
      <time
        ref={ref}
        dateTime={time.format(date, "YYYY-MM-DD")}
        className={cn("text-second text-sm leading-7", className)}
        {...props}
      >
        {time.format(date, "YYYY. MM. DD")}
      </time>
    );
  },
);
PublishDate.displayName = "PageHeader.PublishDate";

export const PageHeader = Object.assign(Root, {
  Title,
  Description,
  PublishDate,
});
