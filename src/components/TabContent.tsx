type Props = {
  tabMassage: string;
};

export const TabContent: React.FC<Props> = ({ tabMassage }: Props) => (
  <div className="block" data-cy="TabContent">
    {tabMassage}
  </div>
);
