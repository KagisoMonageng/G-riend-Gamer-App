PGDMP                         {            oniuhcik "   11.18 (Ubuntu 11.18-1.pgdg20.04+1)    15.1 H    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    13716469    oniuhcik    DATABASE     t   CREATE DATABASE oniuhcik WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';
    DROP DATABASE oniuhcik;
                oniuhcik    false            �           0    0    DATABASE oniuhcik    ACL     ;   REVOKE CONNECT,TEMPORARY ON DATABASE oniuhcik FROM PUBLIC;
                   oniuhcik    false    4068                        2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false            �           0    0    SCHEMA public    ACL     Q   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;
                   postgres    false    27                        3079    17135 	   btree_gin 	   EXTENSION     =   CREATE EXTENSION IF NOT EXISTS btree_gin WITH SCHEMA public;
    DROP EXTENSION btree_gin;
                   false    27            �           0    0    EXTENSION btree_gin    COMMENT     R   COMMENT ON EXTENSION btree_gin IS 'support for indexing common datatypes in GIN';
                        false    15                        3079    17680 
   btree_gist 	   EXTENSION     >   CREATE EXTENSION IF NOT EXISTS btree_gist WITH SCHEMA public;
    DROP EXTENSION btree_gist;
                   false    27            �           0    0    EXTENSION btree_gist    COMMENT     T   COMMENT ON EXTENSION btree_gist IS 'support for indexing common datatypes in GiST';
                        false    19                        3079    16661    citext 	   EXTENSION     :   CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;
    DROP EXTENSION citext;
                   false    27            �           0    0    EXTENSION citext    COMMENT     S   COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';
                        false    8                        3079    17577    cube 	   EXTENSION     8   CREATE EXTENSION IF NOT EXISTS cube WITH SCHEMA public;
    DROP EXTENSION cube;
                   false    27            �           0    0    EXTENSION cube    COMMENT     E   COMMENT ON EXTENSION cube IS 'data type for multidimensional cubes';
                        false    17                        3079    16384    dblink 	   EXTENSION     :   CREATE EXTENSION IF NOT EXISTS dblink WITH SCHEMA public;
    DROP EXTENSION dblink;
                   false    27            �           0    0    EXTENSION dblink    COMMENT     _   COMMENT ON EXTENSION dblink IS 'connect to other PostgreSQL databases from within a database';
                        false    2                        3079    17130    dict_int 	   EXTENSION     <   CREATE EXTENSION IF NOT EXISTS dict_int WITH SCHEMA public;
    DROP EXTENSION dict_int;
                   false    27            �           0    0    EXTENSION dict_int    COMMENT     Q   COMMENT ON EXTENSION dict_int IS 'text search dictionary template for integers';
                        false    14                        3079    18303 	   dict_xsyn 	   EXTENSION     =   CREATE EXTENSION IF NOT EXISTS dict_xsyn WITH SCHEMA public;
    DROP EXTENSION dict_xsyn;
                   false    27            �           0    0    EXTENSION dict_xsyn    COMMENT     e   COMMENT ON EXTENSION dict_xsyn IS 'text search dictionary template for extended synonym processing';
                        false    20                        3079    17664    earthdistance 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS earthdistance WITH SCHEMA public;
    DROP EXTENSION earthdistance;
                   false    27    17            �           0    0    EXTENSION earthdistance    COMMENT     f   COMMENT ON EXTENSION earthdistance IS 'calculate great-circle distances on the surface of the Earth';
                        false    18                        3079    16650    fuzzystrmatch 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS fuzzystrmatch WITH SCHEMA public;
    DROP EXTENSION fuzzystrmatch;
                   false    27            �           0    0    EXTENSION fuzzystrmatch    COMMENT     ]   COMMENT ON EXTENSION fuzzystrmatch IS 'determine similarities and distance between strings';
                        false    7                        3079    17007    hstore 	   EXTENSION     :   CREATE EXTENSION IF NOT EXISTS hstore WITH SCHEMA public;
    DROP EXTENSION hstore;
                   false    27            �           0    0    EXTENSION hstore    COMMENT     S   COMMENT ON EXTENSION hstore IS 'data type for storing sets of (key, value) pairs';
                        false    13                        3079    16889    intarray 	   EXTENSION     <   CREATE EXTENSION IF NOT EXISTS intarray WITH SCHEMA public;
    DROP EXTENSION intarray;
                   false    27            �           0    0    EXTENSION intarray    COMMENT     g   COMMENT ON EXTENSION intarray IS 'functions, operators, and index support for 1-D arrays of integers';
                        false    12                        3079    16444    ltree 	   EXTENSION     9   CREATE EXTENSION IF NOT EXISTS ltree WITH SCHEMA public;
    DROP EXTENSION ltree;
                   false    27            �           0    0    EXTENSION ltree    COMMENT     Q   COMMENT ON EXTENSION ltree IS 'data type for hierarchical tree-like structures';
                        false    4                        3079    18315    pg_stat_statements 	   EXTENSION     F   CREATE EXTENSION IF NOT EXISTS pg_stat_statements WITH SCHEMA public;
 #   DROP EXTENSION pg_stat_statements;
                   false    27            �           0    0    EXTENSION pg_stat_statements    COMMENT     h   COMMENT ON EXTENSION pg_stat_statements IS 'track execution statistics of all SQL statements executed';
                        false    22                        3079    16812    pg_trgm 	   EXTENSION     ;   CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;
    DROP EXTENSION pg_trgm;
                   false    27            �           0    0    EXTENSION pg_trgm    COMMENT     e   COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';
                        false    11            
            3079    16775    pgcrypto 	   EXTENSION     <   CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;
    DROP EXTENSION pgcrypto;
                   false    27            �           0    0    EXTENSION pgcrypto    COMMENT     <   COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';
                        false    10                        3079    17571 
   pgrowlocks 	   EXTENSION     >   CREATE EXTENSION IF NOT EXISTS pgrowlocks WITH SCHEMA public;
    DROP EXTENSION pgrowlocks;
                   false    27            �           0    0    EXTENSION pgrowlocks    COMMENT     I   COMMENT ON EXTENSION pgrowlocks IS 'show row-level locking information';
                        false    16                        3079    16619    pgstattuple 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS pgstattuple WITH SCHEMA public;
    DROP EXTENSION pgstattuple;
                   false    27            �           0    0    EXTENSION pgstattuple    COMMENT     C   COMMENT ON EXTENSION pgstattuple IS 'show tuple-level statistics';
                        false    5                        3079    16629 	   tablefunc 	   EXTENSION     =   CREATE EXTENSION IF NOT EXISTS tablefunc WITH SCHEMA public;
    DROP EXTENSION tablefunc;
                   false    27            �           0    0    EXTENSION tablefunc    COMMENT     `   COMMENT ON EXTENSION tablefunc IS 'functions that manipulate whole tables, including crosstab';
                        false    6                        3079    18308    unaccent 	   EXTENSION     <   CREATE EXTENSION IF NOT EXISTS unaccent WITH SCHEMA public;
    DROP EXTENSION unaccent;
                   false    27            �           0    0    EXTENSION unaccent    COMMENT     P   COMMENT ON EXTENSION unaccent IS 'text search dictionary that removes accents';
                        false    21            	            3079    16764 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false    27            �           0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    9                        3079    16430    xml2 	   EXTENSION     8   CREATE EXTENSION IF NOT EXISTS xml2 WITH SCHEMA public;
    DROP EXTENSION xml2;
                   false    27            �           0    0    EXTENSION xml2    COMMENT     8   COMMENT ON EXTENSION xml2 IS 'XPath querying and XSLT';
                        false    3            �            1259    13716491    comments    TABLE     �   CREATE TABLE public.comments (
    comment_id integer NOT NULL,
    gametag text NOT NULL,
    game_id integer NOT NULL,
    comment text NOT NULL,
    hidden boolean NOT NULL,
    date date NOT NULL,
    image text
);
    DROP TABLE public.comments;
       public            oniuhcik    false    27            �            1259    13716497    comments_comment_id_seq    SEQUENCE     �   CREATE SEQUENCE public.comments_comment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.comments_comment_id_seq;
       public          oniuhcik    false    222    27            �           0    0    comments_comment_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.comments_comment_id_seq OWNED BY public.comments.comment_id;
          public          oniuhcik    false    223            �            1259    13716499    gamers    TABLE     �  CREATE TABLE public.gamers (
    gamer_id integer NOT NULL,
    gametag character varying(50) NOT NULL,
    email character varying(255) NOT NULL,
    name character varying(50) NOT NULL,
    surname character varying(50) NOT NULL,
    password character varying(50) NOT NULL,
    gender character varying(50) NOT NULL,
    birthday character varying(50) NOT NULL,
    image character varying(255) NOT NULL,
    friends text[],
    games integer[]
);
    DROP TABLE public.gamers;
       public            oniuhcik    false    27            �            1259    13716505    gamers_gamer_id_seq    SEQUENCE     �   CREATE SEQUENCE public.gamers_gamer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.gamers_gamer_id_seq;
       public          oniuhcik    false    27    224            �           0    0    gamers_gamer_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.gamers_gamer_id_seq OWNED BY public.gamers.gamer_id;
          public          oniuhcik    false    225            �            1259    13716507    games    TABLE       CREATE TABLE public.games (
    game_id integer NOT NULL,
    name text NOT NULL,
    publisher character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    category text,
    screenshots text[],
    full_name text,
    description text,
    url text
);
    DROP TABLE public.games;
       public            oniuhcik    false    27            �            1259    13716513    games_game_id_seq    SEQUENCE     �   CREATE SEQUENCE public.games_game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.games_game_id_seq;
       public          oniuhcik    false    226    27            �           0    0    games_game_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.games_game_id_seq OWNED BY public.games.game_id;
          public          oniuhcik    false    227            R           2604    13716515    comments comment_id    DEFAULT     z   ALTER TABLE ONLY public.comments ALTER COLUMN comment_id SET DEFAULT nextval('public.comments_comment_id_seq'::regclass);
 B   ALTER TABLE public.comments ALTER COLUMN comment_id DROP DEFAULT;
       public          oniuhcik    false    223    222            S           2604    13716516    gamers gamer_id    DEFAULT     r   ALTER TABLE ONLY public.gamers ALTER COLUMN gamer_id SET DEFAULT nextval('public.gamers_gamer_id_seq'::regclass);
 >   ALTER TABLE public.gamers ALTER COLUMN gamer_id DROP DEFAULT;
       public          oniuhcik    false    225    224            T           2604    13716517    games game_id    DEFAULT     n   ALTER TABLE ONLY public.games ALTER COLUMN game_id SET DEFAULT nextval('public.games_game_id_seq'::regclass);
 <   ALTER TABLE public.games ALTER COLUMN game_id DROP DEFAULT;
       public          oniuhcik    false    227    226            �          0    13716491    comments 
   TABLE DATA           ^   COPY public.comments (comment_id, gametag, game_id, comment, hidden, date, image) FROM stdin;
    public          oniuhcik    false    222   �D       �          0    13716499    gamers 
   TABLE DATA           |   COPY public.gamers (gamer_id, gametag, email, name, surname, password, gender, birthday, image, friends, games) FROM stdin;
    public          oniuhcik    false    224   �E       �          0    13716507    games 
   TABLE DATA           t   COPY public.games (game_id, name, publisher, image, category, screenshots, full_name, description, url) FROM stdin;
    public          oniuhcik    false    226   G       �           0    0    comments_comment_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.comments_comment_id_seq', 2, true);
          public          oniuhcik    false    223                        0    0    gamers_gamer_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.gamers_gamer_id_seq', 5, true);
          public          oniuhcik    false    225                       0    0    games_game_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.games_game_id_seq', 18, true);
          public          oniuhcik    false    227            V           2606    13716519    comments comments_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (comment_id);
 @   ALTER TABLE ONLY public.comments DROP CONSTRAINT comments_pkey;
       public            oniuhcik    false    222            X           2606    13716521    gamers gamers_email_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.gamers
    ADD CONSTRAINT gamers_email_key UNIQUE (email);
 A   ALTER TABLE ONLY public.gamers DROP CONSTRAINT gamers_email_key;
       public            oniuhcik    false    224            Z           2606    13716523    gamers gamers_gametag_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.gamers
    ADD CONSTRAINT gamers_gametag_key UNIQUE (gametag);
 C   ALTER TABLE ONLY public.gamers DROP CONSTRAINT gamers_gametag_key;
       public            oniuhcik    false    224            \           2606    13716525    gamers gamers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.gamers
    ADD CONSTRAINT gamers_pkey PRIMARY KEY (gamer_id);
 <   ALTER TABLE ONLY public.gamers DROP CONSTRAINT gamers_pkey;
       public            oniuhcik    false    224            ^           2606    13716527    games games_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (game_id);
 :   ALTER TABLE ONLY public.games DROP CONSTRAINT games_pkey;
       public            oniuhcik    false    226            �   �   x�͏Ar� E�x
.��:217�>�TY����@	j����"5G��-��جɦ Mݲ���8�y��9�OVWu#�VT�L�1�J�b*G��z���9�.��]4�ܢz�;(���m w3���?�"���U�@AL�,�_�'1h�w������uw�zC�!(�"��uxao��yt��<��6���c4x<7����QE�����      �   m  x�Ւ�n�0E�η��C��JU� !'y8.��!@��{�-R�;��d=[���!#
�<"�)���q�M�z`l&�P�$�-�{hn��`$z��lS�C��E�B0ax��m[�� h�M��neDs8�t�Y��l�ʊ"�h�aqJ���?��Ѐ]ik|�WVZ\�SҜ�2gB�17_h�5+J�0M�xU�])�䩖h�@�ħ�OC�r�ƃG�FH�l�$�]f��g��������m���7֛��x}�O�Ɉ��(*`v���}�{�ey_�/��|���NI�Zp�oX)}gMGP��uV4��SA��5�8B�:p����Uj^�V"g�����q�u*�sj�0�m�r�y�#Zvb      �   �  x��Z�r۸����5;7�~���+�cg���e'�U�J���$��,_�'�G�'ٯ�-�35�E,���_7�k܋�Z�l���c�Kv�#O5VY���v*t�U�˘������/�7�ֲ-#��<	�ۛ�p��zw�v�\��g�"��m?-�/ބo���wyw~>��d���dٸ��U&�e��7{^�&5�,(��%���F�*>�,���+|[�ء�"�D�qG"�Z�*#b�J0q�b~34bI_�F�<��u�Oڅg��`G�TB��n�5KE(����b<��/4m��󊹝�U)Sĭ��0&�+��3C��pF�~���r�\�q
/KU,=6M3����m�긮sNr: �t�<ȵ�Z	�?K�#\L���������YF\�>��e&UܸU[�Z�_*�-��������j+�U�)Lg5o�G�g��$���T�d⭄)����$!�1�ox�A�d2�b��A�V1S4�'��R�5��X�|�7�v�m	n4Fdu;�7���q-c�<�.��D��2(Z�K���n0�������(菽!����h��Nܹ�^��'3塑�̱�z�Q����EP�&��C����R�����x��5��Fe��v+RM�,��3�p��j��("ӄ �C���jK�(�5L�4�a��˄6��4��gLf��@�:C����gCe�@�L�B*���A�b]Xwύ�DU��z�a��L$	m��ֆ�gC��b��(�%�e𺌯iE@�1�j�%����"���j�F9"��(80��ޘE��>O%�L��f�����TK"���w�����{CS
}��B:ڹ� ��6Ô�Ɩʊtݹ�R�V,2�'��A�����w����7��"n���V�k�|������h8��u��s�{�:٠�y¿�Z�zٱ�B�(R����!^�0կ);�B�LB^7�,H�p2嘐_�Y�vf���*�D�����y��Q���#��F��n�2�:E�.k�=2,b��<�l&�R݇:�f9���y�Ka6��TIk{�u�@�;�׃��b1o-j�Kc��qs9c�~�ɕ ��[��"�2;����p8tGݮ;��~LD�x4��^a���%d��.�3�����j��.K�Wx�J�jҸ��q]!�9�iVjpƾ���m���=3՚�ٞ�Q b0쀜���_K-5�EM��dK���s<S�;Rg�%��h��D8�^Ο��na�V�͗������b�+�1U��*}D��rE!N$�i���0�� %�n�}6��^v�'D;Sy�r��[(��m^�/Px����E�4lB}",�|�L�F�M˚����.�"�.�[�*T˝ɢ���5Lx�0�RG�KP����������	�������]�e �s�B��^��,�	d�և�����(�֘a���'�W�aٵ�؁V��k"�M��������uf�(:�䯁m�T@m�R��8*+��˂�3X�������Ý/j���@G�Q)�pJ�5G�O�S��q��5E��)�o��;��CP9���sT���Sڦ!��H��y��z�sM��}"
~�SP`��m*"��UZ�Ē�d�^���04��ℹ*�o�V��+��ƨf�#���7�l�r��7���"(��d����FN&M��@̸�i�(?�	��I��������ߣ�oS6�o��)1;	��o����Ep���1$Ң�����^�"{�!0|`T���!_ �#7���2K�rh���CװB���^qx��:�B6�r�m�dۮ�K0��U2X07"PF ��f(���J"��	��n�S!^���˅�%�hʄDf�&�U�����.4��Ԗr��W;���[���~X��k$���:��$_U�:c*س�R8�\�;!�a�	>S�G`m�f����J�$�1�c���e���,�TzNt!�ٞ��'���eVQ
�&}�*"�m3�"m�c�c[�_$N���S���%<��+��f�C�������~��{��J���3�Ow2F[<�F���'W>�/����w�ܽ�~P��jj�h�5��f5��b��3iN)n+ ̟�H�v[5D*�r���,�I���WE~e��DS��IzjoV�U���m7�����9��T�:l��j"�#�es(�3���Μg�a�3nu����������h�g�9P-��l+&� y�>��8���߫	�0Q�"���CyL�Z��e������yE�{��i�BF��9jB����k,^ǒy��?��캍i"�wB'|WKr�w��n�;;����S��V<J�x	k�7
�W*��
q˾XrP��M�o���Պ���7��KU���_6�UK^kį%M�H���uV3�X� �4��N���L��lkZ���n9�9�FO�������qh�f��p��j�����`Lc��V�]��6��^o0��~DG�����a�]���}c��*Z��Ŷ�*33mc�x�&u���
�]�������}�Ev����!'U�����;8�&[�`����v�o��gA��c��=jչ�T+3�&�(����*Z���n���Wp���/n�c(��M�;��hJ�'s�2�wƣ���s��h~
6!<��C&��{�A�{��"�]7s�*���!�}u���N���M����HH`�J�e�Ch6�N�ߚ!�%�����bX��7���r�����H��҄��涤��D�0�
4�����'Alo���E�cC3{�/��p���lg:A;�������WWN��:w�.�_�����\�?��}����!j�X�i@��ꪶ����!:��;1(f;�q�n���I��۷�ED��������j��/��bkU�c��zd�n�J��6n>N)�{�I��U(9[�ǝ������;�-=�׾\���������ϝ�8_�O:�_L�J^�o����t����	�n-�����l�9I�7܂S���!S$FO����O��2�p^[Qz2�"���/󫻆ʚ�Q�*~ �T��"g���?nT&}w<p�m���:�bsT�<x�4�S`�>b)��9�jVQ��>)d�i����Z��dJ�	u�y�kԚ,O
��v�bI��b��7�fw�J��{āzA��~qu�� �nO܏T�}�)e���]r	��9F兜�ϋ��R|��SRXSn,�qwf{6�@}���+"�~����4���! ɐW��h�6R��Фv��k{Chn�x��ڗL0'D0������B�u�0�Ͱ'6:ئ2�KQ�����B�Z�y���̅X�8&��
�I*C��Z.��*4n<�)������I�(��;l��\�K�m����P�jz�\�~���>��@=u�B��_s��nAz�d4�C��YC~��N�z�tD����2�H��
T��%s?����t򨐕9��:ݑ��%�~�caUD����t'oܔ䖗�Ӂ�����������     