import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MessageCircle, Check } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { BRAND, SERVICES, TIME_SLOTS } from "../data/content";
import { getLenis } from "../lib/scroll";
import { EASE } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const labelCls = "block font-sans text-[10px] tracking-[0.25em] uppercase text-charcoal/50 mb-1";
const fieldCls =
  "w-full bg-transparent border-b border-charcoal/25 focus:border-charcoal outline-none py-3 font-sans text-base text-charcoal placeholder:text-charcoal/30 transition-colors duration-300";

const EMPTY = {
  name: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

export const BookingDialog = ({ state, onClose }) => {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle");
  const [waUrl, setWaUrl] = useState("");

  useEffect(() => {
    if (state.open) {
      setForm((f) => ({
        ...EMPTY,
        service: state.service || "",
        message: state.message || "",
      }));
      setStatus("idle");
      getLenis()?.stop();
    } else {
      getLenis()?.start();
    }
  }, [state]);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const { data } = await axios.post(`${API}/enquiries`, form);
      setWaUrl(data.whatsapp_url);
      setStatus("done");
    } catch (err) {
      setStatus("idle");
      toast.error("Could not send your enquiry. Please call or WhatsApp us directly.");
    }
  };

  const today = new Date().toISOString().slice(0, 10);

  return (
    <AnimatePresence>
      {state.open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[80] bg-charcoal/60 backdrop-blur-sm"
          onClick={onClose}
          data-testid="booking-dialog"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 top-0 h-full w-full sm:max-w-lg bg-ivory overflow-y-auto"
            data-lenis-prevent
          >
            <div className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-charcoal/10">
              <p className="font-sans text-[10px] tracking-[0.3em] text-charcoal/60">
                BOOK AN APPOINTMENT
              </p>
              <button
                data-testid="booking-close-btn"
                aria-label="Close booking form"
                onClick={onClose}
                className="p-2 text-charcoal hover:opacity-50 transition-opacity"
              >
                <X size={20} />
              </button>
            </div>

            {status === "done" ? (
              <div className="px-6 md:px-10 py-16 flex flex-col items-start gap-6" data-testid="booking-success">
                <span className="p-4 border border-charcoal rounded-full">
                  <Check size={22} />
                </span>
                <h3 className="font-serif text-4xl tracking-tight text-charcoal">
                  Request received.
                </h3>
                <p className="font-sans text-sm text-charcoal/60 leading-relaxed max-w-sm">
                  Your enquiry has been sent to the BRANDROOT team. For the
                  fastest confirmation, continue on WhatsApp — your details are
                  already filled in.
                </p>
                <a
                  data-testid="booking-whatsapp-confirm"
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-charcoal text-ivory font-sans text-[11px] tracking-[0.25em] px-8 py-4 hover:bg-charcoal/85 transition-colors duration-500"
                >
                  <MessageCircle size={15} /> CONFIRM ON WHATSAPP
                </a>
                <button
                  data-testid="booking-done-close"
                  onClick={onClose}
                  className="font-sans text-[10px] tracking-[0.25em] text-charcoal/60 border-b border-charcoal/30 pb-1 hover:text-charcoal transition-colors"
                >
                  BACK TO THE SITE
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="px-6 md:px-10 py-10 space-y-8" data-testid="booking-form">
                <h3 className="font-serif text-3xl md:text-4xl tracking-tight text-charcoal">
                  Your appointment,
                  <span className="italic text-stone"> your way.</span>
                </h3>

                <div>
                  <label className={labelCls} htmlFor="bk-name">Name</label>
                  <input id="bk-name" data-testid="booking-name-input" required minLength={2}
                    value={form.name} onChange={set("name")} placeholder="Your full name" className={fieldCls} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="bk-phone">Phone</label>
                  <input id="bk-phone" data-testid="booking-phone-input" required type="tel" minLength={8}
                    value={form.phone} onChange={set("phone")} placeholder="+91 ..." className={fieldCls} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="bk-service">Preferred service</label>
                  <select id="bk-service" data-testid="booking-service-select" required
                    value={form.service} onChange={set("service")} className={fieldCls}>
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                    <option value="Package Enquiry">Package Enquiry (Silver / Gold / Platinum)</option>
                    <option value="Other">Other / Not sure yet</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className={labelCls} htmlFor="bk-date">Preferred date</label>
                    <input id="bk-date" data-testid="booking-date-input" required type="date" min={today}
                      value={form.date} onChange={set("date")} className={fieldCls} />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="bk-time">Preferred time</label>
                    <select id="bk-time" data-testid="booking-time-select" required
                      value={form.time} onChange={set("time")} className={fieldCls}>
                      <option value="" disabled>Select</option>
                      {TIME_SLOTS.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelCls} htmlFor="bk-msg">Message <span className="normal-case tracking-normal">(optional)</span></label>
                  <textarea id="bk-msg" data-testid="booking-message-input" rows={3}
                    value={form.message} onChange={set("message")}
                    placeholder="Anything we should know?" className={`${fieldCls} resize-none`} />
                </div>

                <button
                  data-testid="booking-submit-btn"
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-charcoal text-ivory font-sans text-[11px] tracking-[0.25em] py-5 hover:bg-charcoal/85 transition-colors duration-500 disabled:opacity-50"
                >
                  {status === "sending" ? "SENDING…" : "SEND APPOINTMENT REQUEST"}
                </button>

                <div className="flex items-center justify-center gap-6 pt-2">
                  <a data-testid="booking-call-link" href={BRAND.phoneHref}
                    className="flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] text-charcoal/60 hover:text-charcoal transition-colors">
                    <Phone size={13} /> CALL
                  </a>
                  <a data-testid="booking-whatsapp-link" href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] text-charcoal/60 hover:text-charcoal transition-colors">
                    <MessageCircle size={13} /> WHATSAPP
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
