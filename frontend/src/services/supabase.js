import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase credentials not configured. Contact form will not work.');
}

export const supabase = supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// Contact form submission service
export const submitContactForm = async ({ name, email, subject, message }) => {
    if (!supabase) {
        throw new Error('Supabase is not configured');
    }

    const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
            {
                name,
                email,
                subject,
                message,
                created_at: new Date().toISOString(),
                read: false
            }
        ])
        .select();

    if (error) {
        console.error('Supabase error:', error);
        throw error;
    }

    return data;
};
