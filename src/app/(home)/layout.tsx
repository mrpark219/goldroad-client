import BasicLayout from '@/app/components/BaseLayout';

type Props = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return <BasicLayout>{children}</BasicLayout>;
}
