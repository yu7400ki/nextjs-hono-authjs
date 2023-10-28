"use client";

import { useEffect, useState } from "react";
import { hc } from "hono/client";
import type { AppType } from "./api/[...route]/route";

const client = hc<AppType>("/");

export default function Home() {
  const [name, setName] = useState<string>();

  useEffect(() => {
    client.api.hello
      .$get()
      .then((res) => res.json())
      .then((json) => setName(json.name));
  }, []);

  return <p>{typeof name !== "undefined" ? `Hello ${name}!` : "Loading..."}</p>;
}
