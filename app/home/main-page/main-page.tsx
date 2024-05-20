import { Select } from "@mantine/core";
export function MainPage() {
  return (
    <div className="bg-[var(--base-50)] pt-2">
      <Header />
    </div>
  );
}

const Header = () => {
  return (
    <header className="p-5 flex justify-between text-[#FEFEFE]">
      <h2>Find Developers</h2>
      <Select
        placeholder="Sort By high streetcred"
        data={[
          "Sort By low streetcred",
          "Sort By medium streetcred",
          "Sort By high streetcred",
        ]}
        unstyled
        styles={{
          root: {
            width: "254px",
          },
          input: {
            width: "100%",
            border: "1px solid #292929",
            borderRadius: "10px",
            background: "#1E1E1E",
            padding: "8px 24px",
            fontSize: "16px",
            "&::placeholder": {
              colors: "#FFFFFFFF",
            },
          },
          wrapper: { padding: "8px, 24px, 8px, 24px" },
          description: {
            color: "#FEFEFE",
          },
        }}
      />
    </header>
  );
};
