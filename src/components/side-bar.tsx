interface SidebarProps {
  children?: React.ReactNode;
}

export const Sidebar = (props: SidebarProps) => {
  return (
    <aside className="absolute -top-page left-0 h-[calc(100%+var(--page-top))] max-w-[10rem] -translate-x-52 transition-opacity duration-100 lg:pointer-events-none lg:hidden lg:opacity-0">
      <nav className="sticky top-0 pt-page">{props.children}</nav>
    </aside>
  );
};
