export interface Team {
  team_key: string;
  team_name: string;
  team_country: string;
  team_founded: string;
  team_badge: string;
  venue: Venue;
  players: Player[];
  coaches: Coach[];
}

export interface Venue {
  venue_name: string;
  venue_address: string;
  venue_city: string;
  venue_capacity: string;
  venue_surface: string;
}

export interface Player {
  player_key: number;
  player_id: string;
  player_image: string;
  player_name: string;
  player_number: string;
  player_country: string;
  player_type: string;
  player_age: string;
  player_match_played: string;
  player_goals: string;
  player_yellow_cards: string;
  player_red_cards: string;
  player_injured: string;
  player_substitute_out: string;
  player_substitutes_on_bench: string;
  player_assists: string;
  player_birthdate: string;
  player_is_captain: string;
  player_shots_total: string;
  player_goals_conceded: string;
  player_fouls_committed: string;
  player_tackles: string;
  player_blocks: string;
  player_crosses_total: string;
  player_interceptions: string;
  player_clearances: string;
  player_dispossesed: string;
  player_saves: string;
  player_inside_box_saves: string;
  player_duels_total: string;
  player_duels_won: string;
  player_dribble_attempts: string;
  player_dribble_succ: string;
  player_pen_comm: string;
  player_pen_won: string;
  player_pen_scored: string;
  player_pen_missed: string;
  player_passes: string;
  player_passes_accuracy: string;
  player_key_passes: string;
  player_woordworks: string;
  player_rating: string;
}

export interface Coach {
  coach_name: string;
  coach_country: string;
  coach_age: string;
}
