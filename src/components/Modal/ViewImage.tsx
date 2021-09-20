import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent maxW="900px" maxH="600px">
        <Image objectFit="cover" src={imgUrl} />
        <ModalFooter h="32px" bg="pGray.800" borderBottomRadius="2px">
          <Link
            textDecoration="none"
            href={imgUrl}
            isExternal
            fontSize="0.875rem"
            mr="auto"
            ml="10px"
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
