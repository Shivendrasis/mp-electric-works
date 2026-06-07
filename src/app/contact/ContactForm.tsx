"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, Check } from "lucide-react";
import { SERVICE_OPTIONS, SITE } from "@/lib/site";

type FormValues = {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const [status, setStatus] = useState<Status>("idle");
  const [firstName, setFirstName] = useState("there");

  const onSubmit = async (data: FormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setFirstName(data.name.trim().split(" ")[0] || "there");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="form-card">
        <div className="form-success">
          <div className="sc">
            <Check />
          </div>
          <h3>Thank you!</h3>
          <p>
            Thanks {firstName}! Your enquiry has been received. Our team will get back to you
            shortly.
          </p>
          <button
            className="btn btn-outline"
            style={{ marginTop: 24 }}
            onClick={() => setStatus("idle")}
          >
            Send another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h3 style={{ fontSize: 22, marginBottom: 6 }}>Request a Quote</h3>
        <p style={{ color: "var(--slate-500)", fontSize: 14, marginBottom: 26 }}>
          Fields marked <span style={{ color: "var(--orange-500)" }}>*</span> are required.
        </p>

        <div className="form-row">
          <div className={`field${errors.name ? " err" : ""}`}>
            <label htmlFor="name">
              Full Name <span className="req">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your full name"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="msg">Please enter your name.</span>}
          </div>
          <div className="field">
            <label htmlFor="company">Company Name</label>
            <input id="company" type="text" placeholder="Company name" {...register("company")} />
          </div>
        </div>

        <div className="form-row">
          <div className={`field${errors.phone ? " err" : ""}`}>
            <label htmlFor="phone">
              Phone Number <span className="req">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+91 00000 00000"
              {...register("phone", {
                required: true,
                validate: (v) => v.replace(/[^0-9]/g, "").length >= 8,
              })}
            />
            {errors.phone && <span className="msg">Enter a valid phone number.</span>}
          </div>
          <div className={`field${errors.email ? " err" : ""}`}>
            <label htmlFor="email">
              Email <span className="req">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@company.com"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />
            {errors.email && <span className="msg">Enter a valid email address.</span>}
          </div>
        </div>

        <div className="form-single">
          <div className={`field${errors.service ? " err" : ""}`}>
            <label htmlFor="service">
              Service Required <span className="req">*</span>
            </label>
            <select id="service" defaultValue="" {...register("service", { required: true })}>
              <option value="" disabled>
                Select a service…
              </option>
              {SERVICE_OPTIONS.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            {errors.service && <span className="msg">Please select a service.</span>}
          </div>
        </div>

        <div className="form-single">
          <div className={`field${errors.message ? " err" : ""}`}>
            <label htmlFor="message">
              Message <span className="req">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Tell us about your requirement, quantity, material or timeline…"
              {...register("message", { required: true })}
            />
            {errors.message && <span className="msg">Please add a short message.</span>}
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-lg"
          style={{ width: "100%" }}
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send Enquiry"}
          <Send />
        </button>

        {status === "error" && (
          <p style={{ fontSize: 13, color: "#d23b3b", textAlign: "center", marginTop: 14 }}>
            Something went wrong sending your enquiry. Please email us directly at {SITE.email}.
          </p>
        )}

        <p style={{ fontSize: "12.5px", color: "var(--slate-500)", textAlign: "center", marginTop: 14 }}>
          Your enquiry goes to{" "}
          <b style={{ color: "var(--slate-700)" }}>{SITE.email}</b>
        </p>
      </form>
    </div>
  );
}
