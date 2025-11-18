import { Slot } from '@radix-ui/react-slot';
import type { Post } from 'contentlayer/generated';
import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';

import * as time from '~/libs/time';
import { cn } from '~/libs/utils';

import { Heading } from './ui/heading';

interface PageHeaderProps extends ComponentPropsWithoutRef<'div'> {}

const Root = ({ className, children, ...props }: PageHeaderProps) => {
  return (
    <div className={cn('mb-7', className)} {...props}>
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
Title.displayName = 'PageHeader.Title';

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
        className={cn('text-[14px] text-second leading-7', className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
Description.displayName = 'PageHeader.Description';

/* ---- Date ---- */

interface PublishDateProps extends ComponentPropsWithoutRef<'time'> {
  date: Post['date'];
}

const PublishDate = forwardRef<HTMLTimeElement, PublishDateProps>(
  ({ date, className, ...props }, ref) => {
    return (
      <time
        ref={ref}
        dateTime={time.format(date, 'YYYY-MM-DD')}
        className={cn('text-[14px] text-second leading-7', className)}
        {...props}
      >
        {time.format(date, 'YYYY. MM. DD')}
      </time>
    );
  },
);
PublishDate.displayName = 'PageHeader.PublishDate';

export const PageHeader = Object.assign(Root, {
  Title,
  Description,
  PublishDate,
});
