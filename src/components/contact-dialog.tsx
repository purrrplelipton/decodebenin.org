import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify-icon/react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useTranslations } from "use-intl";
import { z } from "zod";
import { Button } from "#/components/ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "#/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "#/components/ui/input-group";
import { Textarea } from "#/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "#/components/ui/tooltip";
import { Route } from "#/routes";

type ContactFormData = {
  email: string;
  message: string;
};

export function ContactDialog() {
  const t = useTranslations();
  const navigate = Route.useNavigate();

  // Validation schema with translated error messages
  const contactFormSchema = z.object({
    email: z.email(t("contactEmailValidationError")).readonly(),
    message: z.string().min(10, t("contactMessageMinError")).max(1000, t("contactMessageMaxError")),
  });

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: t("contactEmail"),
      message: "",
    },
  });

  const messageValue = watch("message");
  const messageLength = messageValue?.length ?? 0;

  const copyEmailToClipboard = () => {
    const email = t("contactEmail");
    navigator.clipboard.writeText(email).then(() => {
      toast.success(t("contactEmailCopied"), {
        description: email,
        duration: 2000,
        position: "top-center",
        style: {
          background: "var(--decode-green)",
          color: "white",
          border: "1px solid var(--decode-green)",
        },
      });
    });
  };

  const onSubmit = (data: ContactFormData) => {
    try {
      // Encode the message for mailto
      const encodedMessage = encodeURIComponent(data.message);
      const mailtoLink = `mailto:${data.email}?subject=${encodeURIComponent(t("contactMailSubject"))}&body=${encodedMessage}`;

      // Open mailto
      window.location.href = mailtoLink;

      // Show success toast
      toast.success(t("contactSubmitSuccess"), {
        description: t("contactSubmitDesc"),
        duration: 4000,
        position: "top-center",
        style: {
          background: "var(--decode-purple)",
          color: "var(--primary-foreground)",
          border: "1px solid var(--decode-purple-light)",
        },
      });

      // Close dialog after a brief delay
      setTimeout(() => {
        navigate({
          to: "/",
          search: (s) => ({ ...s, page_action: undefined }),
          replace: true,
        });
      }, 1000);
    } catch {
      toast.error(t("contactSubmitError"), {
        description: t("contactSubmitErrorDesc"),
        duration: 4000,
        position: "top-center",
        style: {
          background: "var(--decode-red)",
          color: "white",
          border: "1px solid var(--decode-red)",
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <FieldGroup>
        {/* Email Field (Read-only with Copy Button) */}
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Field orientation="vertical" data-invalid={!!errors.email}>
              <FieldLabel>
                <span className="font-semibold font-serif text-decode-purple">
                  {t("contactEmailLabel")}
                </span>
              </FieldLabel>
              <FieldContent>
                <InputGroup className="border-decode-purple/20 bg-muted/40 focus-within:border-decode-purple/40 focus-within:ring-decode-purple/10">
                  <InputGroupInput
                    {...field}
                    type="email"
                    readOnly
                    className="bg-transparent font-mono text-muted-foreground text-sm outline-none"
                    aria-describedby={errors.email ? `email-error` : `email-hint`}
                  />
                  <InputGroupAddon align="inline-end">
                    <Tooltip>
                      <TooltipTrigger
                        render={
                          <InputGroupButton
                            type="button"
                            variant="ghost"
                            size="xs"
                            onClick={copyEmailToClipboard}
                            aria-label={t("contactEmailCopyButton")}
                          >
                            <Icon icon="hugeicons:copy-01" aria-hidden="true" />
                          </InputGroupButton>
                        }
                      />
                      <TooltipContent side="top">{t("contactEmailCopyButton")}</TooltipContent>
                    </Tooltip>
                  </InputGroupAddon>
                </InputGroup>
                <FieldDescription id="email-hint" className="text-decode-purple/60">
                  {t("contactEmailHint")}
                </FieldDescription>
              </FieldContent>
            </Field>
          )}
        />

        {/* Message Textarea */}
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <Field orientation="vertical" data-invalid={!!errors.message} className="gap-3">
              <div className="flex items-center justify-between">
                <FieldLabel className="m-0">
                  <span className="font-semibold font-serif text-decode-purple">
                    {t("contactMessageLabel")}
                  </span>
                </FieldLabel>
                <span className="font-medium text-muted-foreground text-xs">
                  {messageLength}
                  <span className="text-muted-foreground/50">/1000</span>
                </span>
              </div>
              <FieldContent className="gap-2">
                <Textarea
                  {...field}
                  placeholder={t("contactMessagePlaceholder")}
                  className="min-h-32 border-decode-purple/20 bg-background font-serif placeholder:text-muted-foreground/40 focus-visible:border-decode-purple/40 focus-visible:ring-decode-purple/10"
                  aria-describedby={errors.message ? `message-error` : `message-hint`}
                />

                {/* Character count indicator */}
                <div className="flex h-1.5 overflow-hidden rounded-full bg-decode-purple/10">
                  <div
                    className="bg-linear-to-r from-decode-purple to-decode-purple-light transition-all duration-300"
                    style={{ width: `${(messageLength / 1000) * 100}%` }}
                  />
                </div>

                {errors.message ? (
                  <p
                    id="message-error"
                    className="mt-1 flex items-center gap-1.5 font-medium text-decode-red text-xs"
                  >
                    <Icon
                      icon="hugeicons:alert-circle"
                      className="size-3.5 shrink-0"
                      aria-hidden="true"
                    />
                    {errors.message.message}
                  </p>
                ) : (
                  <FieldDescription id="message-hint" className="text-decode-purple/60">
                    {t("contactMessageHint")}
                  </FieldDescription>
                )}
              </FieldContent>
            </Field>
          )}
        />
      </FieldGroup>

      {/* Submit Buttons */}
      <div className="flex gap-3 pt-4">
        <Button
          type="submit"
          disabled={isSubmitting || !messageValue}
          className="flex-1 gap-2 rounded-md bg-linear-to-r from-decode-purple to-decode-purple-light px-4 py-3 font-semibold text-primary-foreground transition-all hover:from-decode-purple/90 hover:to-decode-purple-light/90 hover:shadow-lg active:scale-95 disabled:pointer-events-none disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Icon
                icon="hugeicons:loading-01"
                className="size-4 animate-spin"
                aria-hidden="true"
              />
              {t("contactSending")}
            </>
          ) : (
            <>
              <Icon icon="hugeicons:send-01" className="size-4" aria-hidden="true" />
              {t("contactSendMessage")}
            </>
          )}
        </Button>
        <Button
          type="button"
          onClick={() =>
            navigate({
              to: "/",
              search: (s) => ({ ...s, page_action: undefined }),
              replace: true,
            })
          }
          className="rounded-md border-2 border-decode-purple/20 bg-decode-purple/5 px-4 py-3 font-semibold text-decode-purple transition-all hover:border-decode-purple/30 hover:bg-decode-purple/10 active:scale-95"
        >
          {t("uiClose")}
        </Button>
      </div>

      {/* Info Box */}
      <div className="rounded-md border-2 border-decode-yellow/30 bg-decode-yellow/8 p-4 backdrop-blur-sm">
        <p className="flex items-start gap-3 text-decode-yellow/80 text-sm leading-relaxed">
          <Icon
            icon="hugeicons:info-circle"
            className="mt-0.5 size-5 shrink-0 text-decode-yellow/60"
            aria-hidden="true"
          />
          <span>{t("contactInfoBox")}</span>
        </p>
      </div>
    </form>
  );
}
