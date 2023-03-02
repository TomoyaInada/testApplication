import { Wrap, WrapItem } from "@chakra-ui/react";
import { VFC, memo } from "react";
import { UserCard } from "../organisms/layout/user/userCard";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={ { base: 4, md: 10 } }>
      <WrapItem>
        <UserCard imageUrl="https://source.unsplash.com/random" userName="test" fullName="testtest1" />
      </WrapItem>
    </Wrap>
  );
});
