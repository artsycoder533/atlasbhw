import { ResourceGroup } from "@/types";
import ResourceItem from "./ResourceItem";

type Props = {
  data: ResourceGroup;
};

const Resources = ({ data }: Props) => {
  const { title, resources } = data;
  return (
    <section className="py-16 max-w-7xl flex flex-col md:flex-row gap-10 mx-auto w-[90vw] border-b border-b-secondary-accent">
      <h2 className="text-3xl md:w-1/3 mt-10">{title}</h2>
      <div className="space-y-12 py-10 md:w-2/3">
        {resources.map(resource => {
          return <div key={resource._key}>
          <ResourceItem resource={resource} />
        </div>
        })}
      </div>
    </section>
  );
};

export default Resources;
