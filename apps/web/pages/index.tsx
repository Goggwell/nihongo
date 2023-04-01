import { Button } from "ui";

export default function Web() {
  return (
    <div>
      <h1>{process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}</h1>
      <Button />
    </div>
  );
}
