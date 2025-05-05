import { Post } from 'contentlayer/generated';

import { Heading } from './ui/heading';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { cn } from '~/libs/utils';
import { Slot } from '@radix-ui/react-slot';

import * as time from '~/libs/time';

interface PageHeaderProps extends ComponentPropsWithoutRef<'div'> {}

const Root = ({ className, children, ...props }: PageHeaderProps) => {
  return (
    <div className={cn('mb-7 font-sans', className)} {...props}>
      {children}
    </div>
  );
};

/* ---- Title ---- */

interface TitleProps extends ComponentPropsWithoutRef<typeof Heading> {}

const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ as = 'h1', children, ...props }, ref) => {
    return (
      <Heading as={as} ref={ref} {...props}>
        {children}
      </Heading>
    );
  },
);

/* ---- Description ---- */

interface DescriptionProps extends ComponentPropsWithoutRef<'p'> {
  asChild?: boolean;
}

const Description = forwardRef<HTMLParagraphElement, DescriptionProps>(
  ({ asChild, className, children, ...props }, ref) => {
    const Component = asChild ? Slot : 'p';

    return (
      <Component
        ref={ref}
        className={cn('font-sans text-[13px] leading-7 text-second', className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

/* ---- Date ---- */

interface DateProps extends ComponentPropsWithoutRef<'time'> {
  date: Post['date'];
}

const Date = forwardRef<HTMLTimeElement, DateProps>(({ date, className, ...props }, ref) => {
  return (
    <time
      ref={ref}
      dateTime={time.format(date, 'YYYY-MM-DD')}
      className={cn('font-sans text-[13px] leading-7 text-second', className)}
      {...props}
    >
      {time.format(date, 'YYYY. MM. DD')}
    </time>
  );
});

export const PageHeader = Object.assign(Root, {
  Title,
  Description,
  Date,
});
