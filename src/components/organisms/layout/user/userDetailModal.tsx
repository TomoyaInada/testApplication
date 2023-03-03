import { Box, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import { VFC, memo } from "react";

type Props = {
  isOpen: boolean,
  onClose: () => void
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
    <ModalOverlay />
    <ModalContent pb={6}>
      <ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value="ははは" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value="はははは" isReadOnly />
            </FormControl>
            <FormLabel>MAIL</FormLabel>
            <Input value="ははあは" isReadOnly />
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input value="ははああは" isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalHeader>
    </ModalContent>
  </Modal>
  );
});
