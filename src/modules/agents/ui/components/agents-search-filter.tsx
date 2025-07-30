import { SearchIcon } from "lucide-react";
import { useState, useEffect } from "react";

import { Input } from "@/components/ui/input";

import { useAgentsFilters } from "../../hooks/use-agents.filters";

export const AgentsSearchFilter = () => {
  const [filters, setFilters] = useAgentsFilters();
  const [searchValue, setSearchValue] = useState(filters.search || "");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters({ search: searchValue, page: 1 });
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue, setFilters]);

  useEffect(() => {
    setSearchValue(filters.search || "");
  }, [filters.search]);

  return (
    <div className="relative">
      <Input
        placeholder="Filter by name"
        className="h-9 w-[200px] bg-white pl-7"
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
      />
      <SearchIcon className="text-muted-foreground absolute top-1/2 left-2 size-4 -translate-y-1/2" />
    </div>
  );
};
