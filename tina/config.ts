import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "event",
        label: "Event Details",
        path: "content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "tagline",
                label: "Tagline",
                required: true,
              },
              {
                type: "string",
                name: "date",
                label: "Event Date",
                required: true,
              },
              {
                type: "string",
                name: "location",
                label: "Location",
                required: true,
              },
              {
                type: "string",
                name: "venue",
                label: "Venue Name",
                required: true,
              },
              {
                type: "string",
                name: "capacity",
                label: "Capacity",
                required: true,
              },
              {
                type: "string",
                name: "dressCode",
                label: "Dress Code",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "about",
            label: "About Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
              {
                type: "string",
                name: "mission",
                label: "Mission Statement",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "schedule",
            label: "Event Schedule",
            list: true,
            fields: [
              {
                type: "string",
                name: "time",
                label: "Time",
                required: true,
              },
              {
                type: "string",
                name: "title",
                label: "Event Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "tickets",
            label: "Tickets",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Ticket Name",
                required: true,
              },
              {
                type: "number",
                name: "price",
                label: "Price ($)",
                required: true,
              },
              {
                type: "string",
                name: "stripeLink",
                label: "Stripe Payment Link",
                required: true,
              },
              {
                type: "boolean",
                name: "isVIP",
                label: "Is VIP Ticket?",
              },
            ],
          },
          {
            type: "object",
            name: "sponsors",
            label: "Sponsorship Levels",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Sponsor Level Name",
                required: true,
              },
              {
                type: "number",
                name: "price",
                label: "Price ($)",
                required: true,
              },
              {
                type: "string",
                name: "stripeLink",
                label: "Stripe Payment Link",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Information",
            fields: [
              {
                type: "string",
                name: "email",
                label: "Contact Email",
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
});
