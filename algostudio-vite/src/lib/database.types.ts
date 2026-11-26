export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      brands: {
        Row: {
          contact_person: string | null
          created_at: string
          email: string | null
          id: string
          instagram: string | null
          name: string
          phone: string | null
          updated_at: string
          upi_id: string | null
          user_id: string
        }
        Insert: {
          contact_person?: string | null
          created_at?: string
          email?: string | null
          id?: string
          instagram?: string | null
          name: string
          phone?: string | null
          updated_at?: string
          upi_id?: string | null
          user_id?: string
        }
        Update: {
          contact_person?: string | null
          created_at?: string
          email?: string | null
          id?: string
          instagram?: string | null
          name?: string
          phone?: string | null
          updated_at?: string
          upi_id?: string | null
          user_id?: string
        }
        Relationships: []
      }
      deals: {
        Row: {
          brand_id: string
          cancelled_on: string | null
          created_at: string
          currency: string
          declined_on: string | null
          delivered_on: string | null
          hook_variants: number
          id: string
          invoiced_on: string | null
          notes: string | null
          offer_amount: number | null
          offer_reminded_on: string | null
          offer_sent_on: string | null
          project_name: string
          revisions: number
          terms_agreed_on: string | null
          updated_at: string
          usage_ends_on: string | null
          usage_rights: string | null
          user_id: string
        }
        Insert: {
          brand_id: string
          cancelled_on?: string | null
          created_at?: string
          currency?: string
          declined_on?: string | null
          delivered_on?: string | null
          hook_variants?: number
          id?: string
          invoiced_on?: string | null
          notes?: string | null
          offer_amount?: number | null
          offer_reminded_on?: string | null
          offer_sent_on?: string | null
          project_name: string
          revisions?: number
          terms_agreed_on?: string | null
          updated_at?: string
          usage_ends_on?: string | null
          usage_rights?: string | null
          user_id?: string
        }
        Update: {
          brand_id?: string
          cancelled_on?: string | null
          created_at?: string
          currency?: string
          declined_on?: string | null
          delivered_on?: string | null
          hook_variants?: number
          id?: string
          invoiced_on?: string | null
          notes?: string | null
          offer_amount?: number | null
          offer_reminded_on?: string | null
          offer_sent_on?: string | null
          project_name?: string
          revisions?: number
          terms_agreed_on?: string | null
          updated_at?: string
          usage_ends_on?: string | null
          usage_rights?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "deals_brand_fkey"
            columns: ["brand_id", "user_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id", "user_id"]
          },
        ]
      }
      payment_receipts: {
        Row: {
          amount_received: number
          created_at: string
          id: string
          method: string | null
          payment_id: string
          received_on: string
          screenshot_path: string | null
          updated_at: string
          user_id: string
          utr: string | null
        }
        Insert: {
          amount_received: number
          created_at?: string
          id?: string
          method?: string | null
          payment_id: string
          received_on?: string
          screenshot_path?: string | null
          updated_at?: string
          user_id?: string
          utr?: string | null
        }
        Update: {
          amount_received?: number
          created_at?: string
          id?: string
          method?: string | null
          payment_id?: string
          received_on?: string
          screenshot_path?: string | null
          updated_at?: string
          user_id?: string
          utr?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payment_receipts_payment_fkey"
            columns: ["payment_id", "user_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id", "user_id"]
          },
          {
            foreignKeyName: "payment_receipts_payment_fkey"
            columns: ["payment_id", "user_id"]
            isOneToOne: false
            referencedRelation: "payments_with_balance"
            referencedColumns: ["id", "user_id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          created_at: string
          currency: string
          deal_id: string
          disputed_on: string | null
          due_date: string | null
          id: string
          invoice_number: string | null
          invoice_sent_on: string | null
          label: string
          updated_at: string
          user_id: string
          written_off_on: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string
          deal_id: string
          disputed_on?: string | null
          due_date?: string | null
          id?: string
          invoice_number?: string | null
          invoice_sent_on?: string | null
          label: string
          updated_at?: string
          user_id?: string
          written_off_on?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string
          deal_id?: string
          disputed_on?: string | null
          due_date?: string | null
          id?: string
          invoice_number?: string | null
          invoice_sent_on?: string | null
          label?: string
          updated_at?: string
          user_id?: string
          written_off_on?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_deal_fkey"
            columns: ["deal_id", "user_id"]
            isOneToOne: false
            referencedRelation: "deals"
            referencedColumns: ["id", "user_id"]
          },
          {
            foreignKeyName: "payments_deal_fkey"
            columns: ["deal_id", "user_id"]
            isOneToOne: false
            referencedRelation: "deals_with_status"
            referencedColumns: ["id", "user_id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          full_name: string | null
          id: string
          tax_set_aside_pct: number
          timezone: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          full_name?: string | null
          id: string
          tax_set_aside_pct?: number
          timezone?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          full_name?: string | null
          id?: string
          tax_set_aside_pct?: number
          timezone?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      deals_with_status: {
        Row: {
          blocker: string | null
          brand_id: string | null
          brand_name: string | null
          cancelled_on: string | null
          created_at: string | null
          currency: string | null
          declined_on: string | null
          delivered_on: string | null
          hook_variants: number | null
          id: string | null
          invoiced_on: string | null
          next_action: string | null
          notes: string | null
          offer_amount: number | null
          offer_reminded_on: string | null
          offer_sent_on: string | null
          open_payment_count: number | null
          payment_count: number | null
          project_name: string | null
          revisions: number | null
          status: string | null
          terms_agreed_on: string | null
          updated_at: string | null
          usage_ends_on: string | null
          usage_rights: string | null
          user_id: string | null
          waiting_for_reply: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "deals_brand_fkey"
            columns: ["brand_id", "user_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id", "user_id"]
          },
        ]
      }
      payments_with_balance: {
        Row: {
          amount: number | null
          created_at: string | null
          currency: string | null
          deal_id: string | null
          disputed_on: string | null
          due_date: string | null
          id: string | null
          invoice_number: string | null
          invoice_sent_on: string | null
          is_fully_paid: boolean | null
          label: string | null
          outstanding_amount: number | null
          receipt_count: number | null
          received_amount: number | null
          updated_at: string | null
          user_id: string | null
          written_off_on: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_deal_fkey"
            columns: ["deal_id", "user_id"]
            isOneToOne: false
            referencedRelation: "deals"
            referencedColumns: ["id", "user_id"]
          },
          {
            foreignKeyName: "payments_deal_fkey"
            columns: ["deal_id", "user_id"]
            isOneToOne: false
            referencedRelation: "deals_with_status"
            referencedColumns: ["id", "user_id"]
          },
        ]
      }
    }
    Functions: {
      compute_deal_status: {
        Args: {
          p_cancelled_on: string
          p_declined_on: string
          p_delivered_on?: string
          p_invoiced_on?: string
          p_offer_reminded_on: string
          p_offer_sent_on: string
          p_open_payment_count: number
          p_payment_count: number
          p_received_payment_count?: number
          p_terms_agreed_on: string
        }
        Returns: {
          blocker: string
          next_action: string
          status: string
        }[]
      }
      deal_status: {
        Args: { p_deal_id: string }
        Returns: {
          blocker: string
          next_action: string
          status: string
        }[]
      }
      insights_summary: {
        Args: { p_today?: string }
        Returns: {
          currency: string
          oldest_overdue_brand: string
          oldest_overdue_due_date: string
          oldest_overdue_label: string
          on_time_count: number
          on_time_percent: number
          overdue_amount: number
          overdue_count: number
          paid_count: number
          top_brand_deal_count: number
          top_brand_id: string
          top_brand_name: string
          top_brand_received: number
        }[]
      }
      money_summary: {
        Args: { p_today?: string }
        Returns: {
          currency: string
          disputed: number
          overdue: number
          received: number
          total_owed: number
          waiting_to_be_paid: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
