import { ResourceGroup } from "@/types";
import Resource from "./ResourceItem";

type Props = {
  data: ResourceGroup;
};

const Resources = ({ data }: Props) => {
  const { title, resources } = data;
  return (
    <section className="max-w-7xl flex gap-10 mx-auto w-[90vw] border-b">
      <h2 className="text-3xl w-1/3 mt-10">{title}</h2>
      <div className="space-y-12 py-10 w-2/3">
        {resources.map((resource) => (
          <div key={resource._id}>
            <Resource resource={resource} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
