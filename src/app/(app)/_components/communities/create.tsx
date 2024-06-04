"use client";

import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createCommunitySchema } from "../../_validators/create-community";
import type { CreateCommunitySchemaType } from "../../_validators/create-community";
import { useCallback } from "react";
import { api, getQueryClient } from "~/trpc/react";

export const CreateCommunity = () => {
  // query client
  const queryClient = getQueryClient();

  // modal state
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  // form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCommunitySchemaType>({
    resolver: zodResolver(createCommunitySchema),
  });

  // mutation
  const { mutate, isPending } = api.communities.create.useMutation({
    onSuccess: async () => {
      if (queryClient) {
        await queryClient.invalidateQueries();
        await queryClient.refetchQueries();
      }

      onClose();
    },
  });

  // callback
  const onSubmit = useCallback((values: CreateCommunitySchemaType) => {
    mutate(values);
  }, []);

  const handleOpenChange = useCallback(() => {
    if (isPending) {
      return;
    }
    onOpenChange();
  }, [isPending, onOpenChange]);

  return (
    <>
      <Button color="primary" fullWidth onPress={onOpen}>
        Create Community
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={handleOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader>Create Community</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="name"
                  placeholder="Uni B.Tech,..."
                  variant="flat"
                  {...register("name")}
                  errorMessage={errors.name?.message}
                  isInvalid={!!errors.name?.message}
                />

                <Textarea
                  label="description"
                  variant="flat"
                  rows={5}
                  {...register("description")}
                  errorMessage={errors.description?.message}
                  isInvalid={!!errors.description?.message}
                />
              </ModalBody>

              <ModalFooter>
                <Button
                  color="danger"
                  variant="flat"
                  type="button"
                  onPress={onClose}
                  disabled={isPending}
                >
                  Close
                </Button>
                <Button isLoading={isPending} color="primary" type="submit">
                  Create
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
