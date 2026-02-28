import { useMemo } from "react";
import { useTranslations } from "use-intl";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "#/components/ui/dialog";
import { ScrollArea } from "#/components/ui/scroll-area";
import { Route } from "#/routes";

export function ScrapbookDialog() {
  const t = useTranslations();
  const { page_action } = Route.useSearch();
  const navigate = Route.useNavigate();
  const isOpen = useMemo(() => {
    return page_action === "show_terms_of_service" || page_action === "show_privacy_policy";
  }, [page_action]);

  const sections =
    page_action === "show_terms_of_service"
      ? [1, 2, 3, 4, 5].map((i) => ({
          title: t(`termsSection${i}Title`),
          content: t(`termsSection${i}Content`),
        }))
      : [1, 2, 3, 4].map((i) => ({
          title: t(`privacySection${i}Title`),
          content: t(`privacySection${i}Content`),
        }));

  const lastUpdated =
    page_action === "show_terms_of_service" ? t("termsLastUpdated") : t("privacyLastUpdated");

  const title = page_action === "show_terms_of_service" ? t("termsTitle") : t("privacyTitle");

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() =>
        navigate({ to: "/", search: (s) => ({ ...s, page_action: undefined }), replace: true })
      }
    >
      <DialogContent className="overflow-hidden border-none bg-transparent p-0 shadow-none ring-0 sm:max-w-2xl">
        <div className="relative p-6 md:p-10">
          {/* Scrapbook Background */}
          <div className="absolute inset-4 -rotate-1 rounded-sm bg-card shadow-xl transition-transform hover:rotate-0" />
          <div className="grid-paper absolute inset-4 -rotate-1 rounded-sm opacity-30" />

          {/* Decorative Tape */}
          <div className="washi-yellow absolute -top-2 left-1/2 h-6 w-24 -translate-x-1/2 rotate-2 rounded-sm opacity-80" />
          <div className="washi-green absolute right-12 -bottom-2 h-5 w-20 rotate-6 rounded-sm opacity-70" />

          {/* Main Content Card */}
          <ScrollArea className="scrapbook-card relative z-10 flex h-[70vh] flex-col rounded-sm bg-card p-6 md:p-8">
            <DialogHeader className="sticky top-0 mb-4 bg-linear-to-b from-66% from-card to-transparent">
              <DialogTitle className="font-bold font-serif text-3xl text-decode-purple md:text-4xl">
                {title}
              </DialogTitle>
              <DialogDescription className="font-medium text-muted-foreground/60 text-xs italic">
                {lastUpdated}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-8 py-4">
              {sections.map((section) => (
                <div key={section.title} className="space-y-2">
                  <h3 className="font-bold font-serif text-decode-purple/80 text-lg">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="mt-6 flex justify-end">
            <div className="washi-purple -rotate-2 rounded-sm px-4 py-1 font-mono text-decode-purple/60 text-xs">
              DECODE BENIN {"//"} 2026
            </div>
          </div>
          {/* Red Pin Sticker */}
          <div className="absolute top-8 right-8 z-20 size-4 rounded-full bg-decode-red shadow-md" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
